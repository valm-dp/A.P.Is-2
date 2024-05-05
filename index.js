
 const botao = document.getElementById(`botao`);
 const cep = document.getElementById(`CEP`).value; 



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
      
/*Retorna o endereço completo para o escopo global, assim podendo ser usado em outra função*/
    }
    catch (error) {
        alert(error.message);
}
 }


async function temperatura(){
    await subir();
    /*const dataehora = new Date().toLocaleString();
    alert(dataehora);*/
    const lati = await document.getElementById(`latitude`).value;
    const longi = await document.getElementById(`longitude`).value;
    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${longi}&current=temperature_2m`);
        const data = await response.json();
        console.log(data);
        var temp = data.current.temperature_2m;

        let temperatura = document.getElementById(`Temperatura`);
        temperatura.innerHTML = `${temp}°c`;
    }
    catch (error){
    alert(error.message);
    }
}
/*4f7dde9c4a9c3138edd15aef6048eeb9*/

  