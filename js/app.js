mano = 0;
totalNosotros = 0;
totalEllos = 0;
function capturar(e) {
  function Persona(nosotrosB, nosotrosP, ellosB, ellosP) {
    this.nosotrosB = isNaN(parseInt(nosotrosB)) ? 0 : parseInt(nosotrosB);
    this.nosotrosP = isNaN(parseInt(nosotrosP)) ? 0 : parseInt(nosotrosP);
    this.ellosB = isNaN(parseInt(ellosB)) ? 0 : parseInt(ellosB);
    this.ellosP = isNaN(parseInt(ellosP)) ? 0 : parseInt(ellosP);
  }

  var nosotrosCapturarB = document.getElementById("bnosotros").value;
  var nosotrosCapturarP = document.getElementById("pnosotros").value;
  var ellosCapturarB = document.getElementById("bellos").value;
  var ellosCapturarP = document.getElementById("pellos").value;

  if (
    nosotrosCapturarB == "" ||
    nosotrosCapturarP == "" ||
    ellosCapturarB == "" ||
    ellosCapturarP == ""
  ) {
    document.getElementById("error").classList.remove("hide");
    setTimeout(function () {
      document.getElementById("error").classList.add("hide");
    }, 3000);
  } else {
    document.getElementById("error").classList.add("hide");
    nuevoSujeto = new Persona(
      nosotrosCapturarB,
      nosotrosCapturarP,
      ellosCapturarB,
      ellosCapturarP
    );
    // console.log(nuevoSujeto);
    agregar();
  }
}

var baseDatos = [];

function agregar() {
  baseDatos.push(nuevoSujeto);

  mano++;
  totalNosotros += nuevoSujeto.nosotrosB + nuevoSujeto.nosotrosP;
  totalEllos += nuevoSujeto.ellosB + nuevoSujeto.ellosP;
  document.getElementById(
    "tabla"
  ).innerHTML += `<tr><td>${mano}</td><td>${nuevoSujeto.nosotrosB}/${nuevoSujeto.nosotrosP}</td><td>${nuevoSujeto.ellosB}/${nuevoSujeto.ellosP}</td></tr>`;
  document.getElementById("tn").innerHTML = totalNosotros;
  document.getElementById("te").innerHTML = totalEllos;
  document.getElementById("bnosotros").value = "";
  document.getElementById("pnosotros").value = "";
  document.getElementById("bellos").value = "";
  document.getElementById("pellos").value = "";
}
