// Autor: Reffcp
// Fecha: 2021-09-29
// Descripción: Ejemplo de private en JavaScript
// el private es un patrón de diseño que permite encapsular datos y métodos
// el private se logra con closures
// el private se logra con factory functions

// private
// se declara una factory function
const person = () => {
    // se declara una variable privada
    let name = 'Reffcp';
    // se declara un método privado
    const getName = () => {
        return name;
    }
    // se retorna un objeto con un método público
    return {
        getName
    }
}
// se llama a la factory function
const p = person();
// se imprime el método público
console.log(p.getName()); // Reffcp
// se imprime la variable privada
// no se puede imprimir porque es una variable privada
// console.log(p.name); //error
// el resultado es Reffcp

// se declara una factory function
const counter = () => {
    // se declara una variable privada
    let count = 0;
    // se declara un método privado
    const increment = () => {
        count++;
    }
    // se declara un método privado
    const decrement = () => {
        count--;
    }
    // se retorna un objeto con métodos públicos
    return {
        increment,
        decrement
    }
}
// se llama a la factory function
const c = counter();
// se llama al método público
c.increment();
c.increment();
c.increment();
// se imprime el método público
console.log(c.increment()); // undefined
// se llama al método público
c.decrement();
// se imprime el método público
console.log(c.decrement()); // undefined
// se imprime la variable privada
// no se puede imprimir porque es una variable privada
// console.log(c.count); //error
// el resultado es undefined y undefined


