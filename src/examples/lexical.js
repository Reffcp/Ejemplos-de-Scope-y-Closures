// Autor: Reffcp
// Fecha: 2021-09-29
// Descripción: Ejemplo de lexical en JavaScript
// el lexical es el alcance de una variable en JavaScript
// el lexical se divide en 2 tipos: global y local
// el lexical global es accesible desde cualquier parte del código
// el lexical local es accesible solo dentro de una función
// el lexical local tiene prioridad sobre el lexical global
// el lexical local tiene prioridad sobre el lexical padre
// el lexical padre no tiene acceso al lexical hijo

// lexical
// se declara una variable global
var hello = 'Hello';
// se declara una función
const helloWorld = () => {
    // se declara una variable local
    const world = 'World';
    // imprime el lexical local
    console.log(`${hello} ${world}`);
}
// se llama a la función
helloWorld();
// imprime el lexical global
console.log(hello);
// imprime el lexical local
// no se puede imprimir porque es un lexical local
// console.log(world); //error
// el resultado es Hello World y Hello


//se exporta el archivo como un módulo
export default {};
