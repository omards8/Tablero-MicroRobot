function pedirDatos(dato) {
  dato = Number(prompt("Introduzca el numero (Entre 1 y 6)"));
  return dato;
}

function comprobarRango(numero) {
  if (numero < 1 || numero > 6) {
    alert("El numero no esta entre el dominio comprendido");
  }
}
alert("El programa le pedira el numero de columnas y de filas para crear un tablero");
alert("Numero de columnas");
var columna = pedirDatos(columna);
alert("Numero de filas");
var fila = pedirDatos(fila);

alert("Comprobacion de columnas (Si es correcto no emite mensaje)");
comprobarRango(columna);
alert("Comprobacion de filas (Si es correcto no emite mensaje)");
comprobarRango(fila);
