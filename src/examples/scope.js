// Autor: Reffcp
// Fecha: 2021-09-29
// Descripción: Ejemplo de scope en JavaScript
// el scope se define como el alcance de una variable en JavaScript
// el scope se divide en 3 tipos: global, local y block
// el scope global es accesible desde cualquier parte del código
// el scope local es accesible solo dentro de una función
// el scope block es accesible solo dentro de un bloque de código

//local
const helloWorld = () => {
    const hello = 'Hello World';
    //imprime el scope local
    console.log(hello);
}

helloWorld();

//global
// scope es global
var scope = 'i am global';

// funcion para imprimir el scope local
const functionScope = () => {
    var scope
    scope =
        'i am just a local';
    //imprime el scope local
    const func = () => {
        return scope;
    }
    // imprime el scope local
    console.log(func());
}
// imprime el scope global
functionScope();
// imprime el scope global
console.log(scope);

//block
// se asigna un valor global y 
// dentro del bloque se asigna uno local
const fruits = () => {
    if (true) {
        // se asigna un valor local
        let fruits1 = 'apple'; 
        var fruits2 = 'banana';
        var fruits3 = 'kiwi';
        console.log(fruits1);
    }
    // imprime el valor global
    // y no se puede imprimir el valor local porque es un bloque de codigo
    console.log(fruits2); //banana
    console.log(fruits3); //kiwi
}
// imprime los valores de la funcion
fruits();

//function
// se asigna un valor global y 
// dentro del bloque se asigna uno local
const anotherFunction = () => {
    // se asigna un valor local
    var x = 1;
    // se reasigna un valor local
    var x = 2;
    // se asigna un valor local
    let y = 1;
    console.log(x);
    console.log(y);
}
// imprime los valores de la funcion
anotherFunction();

// se exporta el archivo como un módulo
export default {};

