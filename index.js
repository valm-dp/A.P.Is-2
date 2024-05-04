
 const botao = document.getElementById(`botao`);

 async function subir(){
    const cep = document.getElementById(`CEP`).value; 
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json();
      console.log(data);
      var Log = data.logradouro
      var Bai = data.bairro
      var Uf = data.uf
      var Cid = data.localidade


      const address = `${Cid}, ${Bai}, ${Uf}, `; /*constante que junta todo o endereço*/
        
        let nome = document.getElementById(`Logradouro`);
        nome.innerHTML = `${Log}`
        
        let distrito = document.getElementById(`Bairro`);
        distrito.innerHTML = `${Bai}`

        let localidade = document.getElementById(`Localidade`);
        localidade.innerHTML = `${Uf}`
      
     return address;/*Retorna o endereço completo para o escopo global, assim podendo ser usado em outra função*/
    }
    catch (error) {
        alert(error.message);
}
 }


async function temperatura(){
    const lati = document.getElementById(`latitude`).value;
    const longi = document.getElementById(`longitude`).value;
    try{
        const response = await fetch(`http://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${longi}&hourly=temperature_2m`);
        const data = await response.json();
        alert(data);

    }
catch (error){
    alert(error.message);
}
}