const fruits = () => {
    if(true){
        
        let fruits1= 'apple';
        var fruits2= 'banana';
        var fruits3= 'kiwi';
        console.log(fruits1);
    }
//error porque el bloque se vuelve local
//al declararse en let
  //  console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();


//se asigna un valor global y 
//dentro del bloque se asigna uno local
//al pasarlo a var los valores
//se reemplazan
let x=1;
{
 let x=2;
 console.log(x);
}

console.log(x);

//si fuese var siempre imprimiria 10
//en su mayoria de logs
const anotherFunction = () =>{
    for (let i = 0; i < 10; i++) {
        setTimeout(() =>{
            console.log(i);
        },1000)      
    }
};

anotherFunction();