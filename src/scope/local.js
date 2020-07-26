const helloWorld = () =>{
    const hello = 'Hello World';
    console.log(hello);
}
//imprime el scope local
helloWorld();
//dara error porque el scope no es global
//console.log(hello);


//el scope local y global no cruazan 
//nombres de variables
var scope = 'i am global';

const functionScope = () => {
    var scope = 'i am just a local';
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);