let primerNumero = document.getElementById("primerNumero");
let segundoNumero = document.getElementById("segundoNumero");
let resultado = document.getElementById("resultado");
let operacion = document.getElementById("operacion");
let boton = document.getElementById("calcula");


boton.addEventListener("click", calcula);

function calcula(){
  primerNumero = Number(primerNumero.value);
  segundoNumero = Number(segundoNumero.value);

if ( operacion.value == 1 ) {
  console.log(primerNumero + segundoNumero)
}

else if ( operacion.value == 2 ) {
  console.log(primerNumero - segundoNumero)
}
  
else if (operacion.value == 3) {
  console.log(primerNumero * segundoNumero)
}

else if (operacion.value == 4) {
  console.log(primerNumero / segundoNumero)
}

else {
  
  console.log("selecciona la operacion a realizar")
}
}

