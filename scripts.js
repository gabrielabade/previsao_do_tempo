// VARIÁVEIS => espaco da memoria do computador que guardamos algo uma imagem um numero uma variavel
// FUNÇÃO  => um trecho de codigo que só é é executado quando é chamado

let chave = "a93e8a99b3c414fd013355e2b968e208"

function colocarNaTela(dados){
    console.log(dados)
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".descricao") .innerHTML = dados.weather [0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector (".umidade") .innerHTML = "Umidade: " + dados.main.humidity + "%"
    

}

async function buscarCidade(cidade) {
    let dados = await fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" +
    chave +
    "&lang=pt_br" +
    "&units=metric"
    )
    .then( resposta => resposta.json())

    colocarNaTela (dados)
    


}


function cliqueiNoBotao(){

    let cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade)
}