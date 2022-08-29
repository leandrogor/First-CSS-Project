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
  for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i]);
  }
}
