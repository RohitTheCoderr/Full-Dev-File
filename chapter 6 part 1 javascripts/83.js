// super 


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


 }

// when some add extra feature in dog class then we define create constructor inside dog class and take some feature from parent class like add constructor in line no 25
// now when we call dog conctructor then inside the constructor we use a super method super method is use for takeing name and age from parent class beacause in the parent clsass name and age is already define so we not need for name and age define here   
// so super keyword is use for call parent class constructor and taking same value ok
const tommy= new Dog("tom", 5, 45)
console.log(tommy.run())
console.log(tommy.isCute())