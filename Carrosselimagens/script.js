const carrossel = document.getElementById("carrossel");
const imagem = carrossel.getElementsByTagName("img");
let currentIndex1 = 0;

function changeImage() {
  imagem[currentIndex1].classList.remove("active");
  currentIndex1 = (currentIndex1 + 1) % imagem.length;
  imagem[currentIndex1].classList.add("active");
}

//muda a imagem a cada 3 segundos(chama a função  changeImage)
setInterval(changeImage, 3000);
