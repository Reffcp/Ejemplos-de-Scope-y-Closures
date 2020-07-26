const person = () =>{
    var saveName = 'Name';
    return {
        getName: () =>{
            return saveName;
        },
        satName: (name) =>{
            saveName=name;
        }

    };
};

newPerson =person()
console.log(newPerson.getName());

newPerson.satName('Reff')
console.log(newPerson.getName());