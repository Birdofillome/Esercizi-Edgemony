function contaCaratteri() {
  var testo = document.getElementById("testo").value.trim();
  var contatore = document.getElementById("contatore");
  var precedente = contatore.innerText;
  contatore.innerText = testo.length;

  if (testo.length > precedente) {
    contatore.classList.add("grow");
    contatore.classList.remove("shrink");
  } else if (testo.length < precedente) {
    contatore.classList.add("shrink");
    contatore.classList.remove("grow");
  }

  setTimeout(function () {
    contatore.classList.remove("grow");
    contatore.classList.remove("shrink");
  }, 200);
}

document.getElementById("testo").addEventListener("input", contaCaratteri);
