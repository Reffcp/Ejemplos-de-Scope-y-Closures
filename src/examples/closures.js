// Autor: Reffcp
// Fecha: 2021-09-29
// Descripción: Ejemplo de closures en JavaScript
// los closures son funciones que recuerdan el ámbito en el que fueron creadas
// los closures tienen acceso a las variables de su ámbito padre
// los closures tienen acceso a las variables globales
// los closures tienen acceso a las variables locales
// los closures tienen acceso a los parámetros de la función padre
// los closures tienen acceso a los parámetros de la función hijo
// los closures tienen acceso a las variables de la función hijo
// los closures tienen acceso a las variables de la función padre

// closure
// se declara una función 
const moneyBox = (coins) => {
    // se declara una variable local
    var saveCoins = 0;
    // se asigna el valor de la variable local
    saveCoins += coins;
    // imprime la variable local
    console.log(`MoneyBox: $${saveCoins}`);
}

// se llama a la función y se le asigna un valor
moneyBox(5);
moneyBox(10);
// el resultado es 5 y 10

// utilizando un closure
// se declara una función
const moneyBoxWithClosure = () => {
    // se declara una variable local
    var saveCoins = 0;
    // se declara una función
    const countCoins = (coins) => {
        // se asigna el valor de la variable local
        saveCoins += coins;
        // imprime la variable local
        console.log(`MoneyBox: $${saveCoins}`);
    }
    // se retorna la función
    return countCoins;
}

// se asigna la función a una variable
let myMoneyBox = moneyBoxWithClosure();
// se llama a la función y se le asigna un valor
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
// el resultado es 4, 10 y 20
