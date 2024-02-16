//  extends keyword
//  Extends keyword is use for take a value from parent class 

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

// here Dog class is sub class of Animal class because Dog class called some method and constructor from Animal class so here Dog class a sub class of animal and Animal is parent class of Dog class 
 class Dog extends Animal{
    
 }

// const animal1 = new Animal("cow", 4);
// const animal2 = new Animal("Dog", 7);
// console.log(animal1.name);
// console.log(animal1.eat());
// console.log(animal1.isCute());



// when we call a Dog class's constructor with using new keyword then firstly check constructor inside the dog clss when constructor is not avaiavle in this dog class then go to the parent class constructor and method call

const tommy= new Dog("tom", 5)
console.log(tommy.isCute());
