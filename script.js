function calcEdad() {
  actual = Number(prompt('¿Qué edad tenés?'));

  while (isNaN(actual)) {
    alert('Por favor, escribe un número');
    actual = Number(prompt('¿Qué edad tenés?'));
  }

  alert('Dentro de 10 años tendrás ' + String(actual + 10) + '.');
  return actual + 10;
}

function mostrarCadena(cadena) {
  //for (n=0;n<=n.lengh-1;n++) {
    console.log(cadena[0]);
  //}
  alert(cadena);
}

