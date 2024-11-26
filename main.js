// Pedimos al usuario un número
let numero = parseInt(prompt("Introduce un número:"));
let incremento = 5;  // Número con el que se sumará cada vez

// Usamos un ciclo for para hacer 5 repeticiones
for (let i = 1; i <= 5; i++) {
    numero += incremento;  // Sumar el valor de incremento
    console.log(`Repetición ${i}: El número ahora es ${numero}`);
}
