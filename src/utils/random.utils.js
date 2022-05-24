function randomInteger() {
  return Math.floor(Math.random() * 1000) + 1;
}

function calculation(quantity) {
  const numbers = []; // array numbers
  const values = {}; // objeto values

  for (let i = 1; i <= quantity; i++) {
    numbers.push(randomInteger());
  }
  // ======================================
  numbers.forEach((value) => {
    // en cada vuelta, voy a asignarle un par clave valor al objeto values
    values[value] = numbers.filter((val) => val === value).length; // en este caso la clave va a ser un numero dentro del array numbers (value)

    /* el valor de las claves (value) va a ser la cantidad de veces (length porque filter crea un nuevo array) que se repite un numero dentro del array numbers 
    y, al usar filter, en cada iteracion se evaluan todos los valores dentro del array numbers que coinciden con el valor de la iteración actual (val === value) */
  });
  return values;
}

process.send('ready');

process.on('message', (q) => {
  const res = calculation(Number(q))
  process.send(res)
})
