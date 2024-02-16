// same method in base class

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


 class Dog extends Animal{
     constructor(name, age, speed){
        super(name, age)
    this.speed=speed;
     }

run(){
    return `${this.name} is running at ${this.speed} km/h`
}

eat(){
    return `modified Eat of dog: ${this.name} is eating`
}

 }

const tommy= new Dog("tom", 5, 45)
console.log(tommy.run())
console.log(tommy.eat())   // yuo can see we add same method inside dog class now which method is call dog or animal answer is dog  because we call dog constructor and firstly find all method inside itself if method is not avaiable inside itself then find inside parent class with the help of supper class like 
console.log(tommy.isCute())