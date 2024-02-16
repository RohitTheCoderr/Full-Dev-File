//  example of Class

class Animal{
    constructor (name, age){
        this.name= name;
        this.age= age;
    }
    eat(){
        return `${this.name} is eating`
    }
    isCute(){
        // return this.age < 5;
      if (this.age < 5) {
            console.log("This is very cute animal")
        }
        else{
            console.log("This is cute animal but normal")
        }
    }
}

const animal1 = new Animal("cow", 4);
const animal2 = new Animal("Dog", 7);
console.log(animal1.name);
console.log(animal1.eat());
console.log(animal1.isCute());