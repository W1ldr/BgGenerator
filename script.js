var css = document.querySelector("h3");
var cor1 = document.querySelector(".cor1");
var cor2 = document.querySelector(".cor2");
var body = document.getElementById("gradient");

// mudar o degrade da pg
function setGradient() {
  body.style.backgroundImage =
    "linear-gradient(to right," + cor1.value + "," + cor2.value + ")";
  //mostrar o css do degrade
  css.textContent = body.style.backgroundImage + ";";
}

//add eventos
cor1.addEventListener("input", setGradient);
cor2.addEventListener("input", setGradient);
