// 12 July: Constructors and Prototype Chaining
// Question1
// class Person {
// 	constructor(name,age){
// 		this.name=name;
// 		this.age=age;
// 	}
// 	get myName(){
// 		return this.name;
// 	}

// 	set myName(value){
// 		this.name=value;
// 	}
// }
// var person = new Person("Rahul",28);

// class Student extends Person {
// 	constructor(name, age) {
//         super(name, age);
//       }
//     //super(name, age)
// 	study(){
// 		return this.name + " is studing."
//        // console.log(`${this.name}   is studing.`);
// 	}
// }
// var student = new Student("Saksham",15);
// console.log(student.study());

// class Teacher extends Person {
//     constructor(name, age) {
//         super(name, age);
//       }
// 	teach(){
// 		//return this.name + " is teaching."
//         console.log(this.name + " is teaching.");
// 	}
// }
   
// var teacher = new Teacher("Manjeet",25);
// teacher.teach();

//Question 2:
/* Create a class called Animal that has a constructor method that takes one argument: species. It should have a getter for species and a method called makeSound() that logs a sound the animal makes.
 Create a subclass called Cat that extends the Animal class. Add a method to the Cat class called purr() that logs "purr" to the console. 
Create a subclass called Dog that extends the Animal class. Add a method to the Dog class called bark() that logs "woof" to the console. */
// class Animal {
//     constructor(species){
//         this.species=species;
//     }
   
//     get speciesName(){
//         return this.species;
//     }

//     makeSound(){
//         console.log(`${this.species} makes sound`)
//     }
// }

// class Dog extends Animal {
//     constructor(species){
//         super(species)
//     }
//     bark(){
//         console.log(`${this.species} barks`)  
//     }
// }

// class Cat extends Animal {
//     constructor(species){
//         super(species)
//     }
//     purr(){
//         console.log(`${this.species} mews`)  
//     }
// }

// var animal = new Animal("Asian elephant")
// animal.makeSound();

// var cat = new Cat("Persian cat")
// cat.purr();

// var cat2 = new Cat("Morrian cat")
// cat.purr();


// var dog = new Dog("Bulldog")
// dog.bark();

// note: if we want to make more instances of any object like either, cat or dog, then use constructor as done above
// but if we want to make only one instance of each object, then constructor can be used as below:
// class Cat extends Animal {
//     constructor(){
//         super("Persian cat")       // noticed, we have mentioned species name here only instead of giving at time of creation of object
//     }
// }
// var cat = new Cat()
// cat.purr();

// Question 3
/*Create a class called Animal that has a constructor method that takes one argument: species.
 It should have a getter for species and a method called makeSound() that logs a sound the animal makes.
Create a subclass called Cat that extends the Animal class. 
Add a method to the Cat class called purr() that logs "purr" to the console. 
Create a subclass called Dog that extends the Animal class. 
Add a method to the Dog class called bark() that logs "woof" to the console.  */
// class Animal {
// 	constructor (species){
// 		this._species =species
// 	}

// 	get species(){
// 		return this._species;
// 	}
// 	makeSound(){
// 		console.log(`The ${this.species} makes a sound`)
// 	}
// }

// class Dog extends Animal {

// 	bark(){
// 		console.log("woof")
// 	}
// }

// class Cat extends Animal {
//   constructor(species) {
//     super(species);
//   }

//   purr() {
//     console.log("purr");
//   }

//   makeSound() {
//     console.log(`The ${this.species} makes a sound`);
//   }
// }

// var dog = new Dog();
// dog.bark()

// var animal = new Animal("Asian elephant")
// animal.makeSound();

// var cat = new Cat("Persian cat")
// cat.purr();
// cat.makeSound()

// question : Get Set Shapes
class Rectangle {
	constructor(width,height){
    this.width=width;
    this.height=height;
    }

    getArea(){
        return `Area is : ${this.width}*${this.height}`
    }
}

class Square extends Rectangle {
    constructor(side){
        super()
        this.side=side;
    }
    getPerimeter(){
        return `Perimeter is : ${this.side}*${this.side}`
    }
}

var square = new Square(6);
console.log(square.getPerimeter());
 var rectangle = new Rectangle(4,5);
console.log(rectangle.getArea());

//Question 4:
/* function Person(name, age) {
	this.name=name;
	this.age=age;
}

Person.prototype.greet=function(name,age){
	console.log(`hello, my name is ${this.name}, I am ${this.age}`)
}

function Employee(name, age, jobTitle) {
this.jobTitle=jobTitle;
}

Employee.prototype.greet=function(name,age,jobTitle){
	console.log(`hello, my name is ${this.name}, I am ${this.age}, and my job title is ${this.jobTitle}`)
}

Employee.prototype.__proto= Person.prototype;

const person = new Person("manjeet",30);
person.greet();

const employee = new Employee("saksham", 20, "Software engineer" )
employee.greet();  */