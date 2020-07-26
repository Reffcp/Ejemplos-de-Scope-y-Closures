var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World';
//no se puede  redeclarar un let ni un const
//let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();
//no definir un tipo de variable 
//es una mala practica
const helloWorld = () =>{
    globalVar = 'iam global'
}

helloWorld()
console.log(globalVar);
//al definir una tipo de variable 
//se ajusta al scope local
const anotherFunction = () =>{
    var localvar = 'IAM global'
}

anotherFunction();
console.log(localvar);