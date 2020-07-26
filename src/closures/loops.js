const anotherFunction = () =>{
    //var siempre 10
    //let del 1 0 al 10
    for (var i = 0; i < 10; i++) {
        setTimeout(() =>{
            console.log(i);
        },1000)      
    }
};

anotherFunction();