
 const botao = document.getElementById(`botao`);

 async function subir(){
    const cep = document.getElementById(`CEP`).value; 
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json();
      console.log(data);
      var Log = data.logradouro
      var Bai = data.bairro
      var Uf = data.localidade
        
        var nome = document.getElementById(`Logradouro`);
        nome.innerHTML = `${Log}`
        
        var distrito = document.getElementById(`Bairro`);
        distrito.innerHTML = `${Bai}`

        var localidade = document.getElementById(`Localidade`);
        localidade.innerHTML = `${Uf}`
    }
    catch (error) {
        alert(error.message);
}
 }