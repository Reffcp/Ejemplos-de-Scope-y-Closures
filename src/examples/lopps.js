// Autor: Reffcp
// Fecha: 2021-09-29
// Descripción: Ejemplo de lopps en JavaScript
// los loops son estructuras de control que permiten repetir un bloque de código
// los loops tienen 3 partes: inicialización, condición y actualización
// los loops tienen 3 tipos: for, while y do while
// los loops tienen 2 tipos de control: break y continue

// for loop
// se declara un for loop
for (let i = 0; i < 10; i++) {
    // imprime el valor de i
    console.log(i);
}

// while loop
// se declara un while loop
let j = 0;
while (j < 10) {
    // imprime el valor de j
    console.log(j);
    j++;
}

// do while loop
// se declara un do while loop
let k = 0;
do {
    // imprime el valor de k
    console.log(k);
    k++;
}
while (k < 10);

// break
// se declara un for loop
for (let l = 0; l < 10; l++) {
    // si l es igual a 5, se detiene el loop
    if (l === 5) {
        break;
    }
    // imprime el valor de l
    console.log(l);
}

// continue
// se declara un for loop
for (let m = 0; m < 10; m++) {
    // si m es igual a 5, se salta la iteración
    if (m === 5) {
        continue;
    }
    // imprime el valor de m
    console.log(m);
}
// el resultado es 0, 1, 2, 3, 4, 6, 7, 8, 9