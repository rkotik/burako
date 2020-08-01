// Definiciones de variables
var baseDatos = [];
mano = 0;
totalNosotros = 0;
totalEllos = 0;
tNosotros = document.querySelector("#tn");
tEllos = document.querySelector("#te");
bNosotros = document.querySelector("#bnosotros");
pNosotros = document.querySelector("#pnosotros");
bEllos = document.querySelector("#bellos");
pEllos = document.querySelector("#pellos");

// Juego
tNosotros.innerHTML = totalNosotros;
tEllos.innerHTML = totalEllos;

// Captura los datos cargados
function capturar(e) {
  function Persona(nosotrosB, nosotrosP, ellosB, ellosP) {
    this.nosotrosB = isNaN(parseInt(nosotrosB)) ? 0 : parseInt(nosotrosB);
    this.nosotrosP = isNaN(parseInt(nosotrosP)) ? 0 : parseInt(nosotrosP);
    this.ellosB = isNaN(parseInt(ellosB)) ? 0 : parseInt(ellosB);
    this.ellosP = isNaN(parseInt(ellosP)) ? 0 : parseInt(ellosP);
  }

  var nosotrosCapturarB = bNosotros.value;
  var nosotrosCapturarP = pNosotros.value;
  var ellosCapturarB = bEllos.value;
  var ellosCapturarP = pEllos.value;

  if (
    nosotrosCapturarB == "" ||
    nosotrosCapturarP == "" ||
    ellosCapturarB == "" ||
    ellosCapturarP == ""
  ) {
    document.querySelector("#error").classList.remove("hide");
    setTimeout(function () {
      document.querySelector("#error").classList.add("hide");
    }, 3000);
  } else {
    document.querySelector("#error").classList.add("hide");
    nuevoSujeto = new Persona(
      nosotrosCapturarB,
      nosotrosCapturarP,
      ellosCapturarB,
      ellosCapturarP
    );
    agregar();
  }
}

function agregar() {
  baseDatos.push(nuevoSujeto);

  mano++;
  totalNosotros += nuevoSujeto.nosotrosB + nuevoSujeto.nosotrosP;
  totalEllos += nuevoSujeto.ellosB + nuevoSujeto.ellosP;
  document.getElementById(
    "tabla"
  ).innerHTML += `<tr><td>${mano}</td><td>${nuevoSujeto.nosotrosB}/${nuevoSujeto.nosotrosP}</td><td>${nuevoSujeto.ellosB}/${nuevoSujeto.ellosP}</td></tr>`;
  tNosotros.innerHTML = totalNosotros;
  tEllos.innerHTML = totalEllos;
  bNosotros.value = "";
  pNosotros.value = "";
  bEllos.value = "";
  pEllos.value = "";
  localStorage.setItem("Puntos", JSON.stringify(baseDatos));
}

btnBorrar.addEventListener("click", borrarDatos);
btnCargar.addEventListener("click", cargarDatos);

function borrarDatos(e) {
  e.preventDefault();
  puntos = JSON.parse(localStorage.getItem("Puntos"));
  if (puntos) {
    confirm("¿Estás seguro de limpiar los datos del juego?");
    localStorage.clear();
    mano = 0;
    totalNosotros = 0;
    totalEllos = 0;
    tNosotros.innerHTML = totalNosotros;
    tEllos.innerHTML = totalEllos;
    document.querySelector("#tabla").innerHTML = "";
  } else {
    alert("No hay datos registrados para borrar");
  }
}

function cargarDatos(e) {
  e.preventDefault();
  puntos = JSON.parse(localStorage.getItem("Puntos"));
  if (puntos) {
    tpn = 0;
    tpe = 0;
    for (i = 0; i < puntos.length; i++) {
      pnb = puntos[i].nosotrosB;
      pnp = puntos[i].nosotrosP;
      peb = puntos[i].ellosB;
      pep = puntos[i].ellosP;
      tpn = tpn + pnb + pnp;
      tpe = tpe + peb + pep;
      document.getElementById("tabla").innerHTML += `<tr><td>${parseInt(
        i + 1
      )}</td><td>${pnb}/${pnp}</td><td>${peb}/${pep}</td></tr>`;
    }

    tNosotros.innerHTML = tpn;
    tEllos.innerHTML = tpe;
  } else {
    alert("No hay datos registrados para recuperar");
  }
}

// tratar de llevar la mayor cantidad de operaciones a funciones por sus repeticiones y optimizar el codigo
