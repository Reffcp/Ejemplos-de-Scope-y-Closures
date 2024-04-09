// Autor: Reffcp
// Fecha: 2021-09-29
// Descripción: Ejemplo de hoisting en JavaScript
// el hoisting se define como el comportamiento de JavaScript de mover las declaraciones al inicio de un ámbito

// hoisting
// las variables se declaran antes de ser inicializadas
// una variable no declarada siempre es var
a = 2;
var a;
console.log(a); // 2
// el hoisting define a como undefined

// elevación y se declara a como undefined
console.log(a); // undefined
var a = 2;

// el hoisting define la función primero
nameOfCat('Morgan'); // Morgan es el argumento (y el nombre de mi gata)
function nameOfCat(name) {
    console.log(name);
}
// se imprime el argumento
// el resultado es Morgan
nameOfCat('Morgan'); 

// se exporta el archivo como un módulo
export default {};
