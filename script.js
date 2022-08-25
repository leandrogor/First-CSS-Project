function calcEdad() {
  actual = Number(prompt('¿Qué edad tenés?'));

  while (isNaN(actual)) {
    alert('Por favor, escribe un número')
    actual = Number(prompt('¿Qué edad tenés?'));
  }

  alert('Dentro de 10 años tendrás ' + String(actual + 10) + '.');
}
