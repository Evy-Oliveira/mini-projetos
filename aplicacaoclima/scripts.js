let chave = "500ff0f8f4cb8e5035a3ac5f8f6aff1b"

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade do ar " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"


}

async function buscarCidade(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json())

    colocarNaTela(dados)
}



function verificaCidade() {
    let cidade = document.querySelector(".input-cidade").value

    // condição para quando o enter for clicado ou botão apertado sem informar a cidade
    if (cidade === "") {
        document.querySelector(".cidade").innerHTML = "Cidade"
        document.querySelector(".temp").innerHTML = "°C"
        document.querySelector(".descricao").innerHTML = "Clima"
        document.querySelector(".umidade").innerHTML = "Umidade do ar"
        document.querySelector(".icone").src =""
    }
    else
        buscarCidade(cidade)

}

// inclui evento de entrada do teclado(tecla pressionada)
document.addEventListener("keypress", function(e) {
    // quando o enter for pressionado chama a funçao verificaCidade, isso vale para qualquer tecla, desde que configurada
    if(e.key === 'Enter') verificaCidade()
  });


  