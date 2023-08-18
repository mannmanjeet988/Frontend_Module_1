//F3: OOPs Mcqs

//Q2
// var Person = class{
//     constructor(){}
//     sayHello(){
//         return "hello!"
//     }
// };
// var instance =  new Person();
// console.log(instance.sayHello()+" " +Person.name)
// output: hello! Person
/* Person.name returns the name of the class, which is "Person" in this case. 
In JavaScript, the name property is a built-in property available on functions, including class constructors. 
It represents the name of the function or class.  */

//Q4:
// function User(name){
//     this.isAdmin=false;
// }

// var user = new User("James")
// console.log(user);

//Q5:
// var obj ={};
// function A(){
//     return obj;
// }

// function B(){
//     return obj;
// }
//console.log(new A()==new B())
//output:
/*In JavaScript, objects are compared by reference. When comparing two objects using the == operator, it checks if both objects refer to the same memory location. In this case, new A() and new B() both return the same object obj.
Therefore, new A() == new B() will evaluate to true because the two instances created by new A() and new B() refer to the same object in memory.
The output of console.log(new A() == new B()) will be true.*/

//Q7
// var a = new Boolean();
// console.log(Object.getProrotypeOf(a));
//output:Uncaught TypeError: Object.getProrotypeOf is not a function

//Q9:
// class MyClass{
//     constructor(x){
//         console.log("constructor is called");
//         this.x=x;
//     }
// }
// const obj = new MyClass();
// console.log(obj.x);
//output:
//constructor is called
// undefined

//Q10:
// function Person(age){
//     this.age = age;
// }
// var p1= new Person(9);
// console.log(Person.hasOwnProperty("name"))
//output:true


//Q11:
// class Person{
//     conatructor(name){
//         this.name=name;
//     }
// }
// var person = new Person("James")
// The below statement returns true or false if a property is present in the person object -person.hasOwnProperty(property)
// Where does this function come from?
// a)From Object’s prototype
// b)We must have declared it inside the class
// c)None of the above mentioned reason is valid

// output: The correct answer is: "From Object's prototype."
// The hasOwnProperty function is not explicitly declared inside the Person class or the constructor function. It is an inherited method from the Object prototype in JavaScript.
// When you call person.hasOwnProperty(property), JavaScript looks for the hasOwnProperty method on the person object. Since person is an instance of the Person class, and classes in JavaScript are implemented using prototypes, the hasOwnProperty method is not directly defined on the person
//  object.

//Q12:
class Vehicle{
    constructor(doors,wheels){
        this.doors=doors;
        this.wheels=wheels;
    }
}
class Bus extends Vehicle{
    constructor(windows){
       super(2,4)
        this.windows=windows;
    }
}
var b = new Bus(4);
console.log(Bus.windows);
// output:Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//     at new Bus (index.js:79:9)
//     at index.js:82:9

//Q13:
// const object1= new Object();
// object1.property1=42;
// console.log(object1)
// output:Object { property1: 42 }

//q14
// function Abc(){
//     "use srtict"
//     this.a =25;
//     return{a:35,b:44};
// }
// var obj = new Abc();
// console.log(obj.a, obj.b);
// output: 35 44
//if return statement is commented, then output will be 25,undefined

//q15
// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }
// console.log(Person === Person.prototype.constructor)
// output = true
/*explantion: In JavaScript, when you define a class using the class syntax, the class itself is a reference to the constructor function. In the case of the Person class, 
Person is indeed a reference to the constructor function for the class.
The Person.prototype.constructor refers to the constructor function 
that is associated with the Person class. When you define a class, JavaScript automatically creates a prototype object for that class, and 
the constructor property of the prototype object refers back to the class's constructor function.
Therefore, Person === Person.prototype.constructor will evaluate to true. This comparison checks if the Person reference is equal to the constructor function referenced by Person.prototype.constructor, which is true in this case.  */

//Q16
// const object1= new Object();
// object1.property1=42;
// console.log(Object())
//output:{}
/* explanation:The Object() function in JavaScript is a built-in function that is used to create new object instances. When called with the new keyword, it returns a new empty object.

However, when called without the new keyword, the behavior of the Object() function is different. In this case, it is not used to create an object, but rather it acts as a constructor function for primitive wrapper objects. When you call Object() without the new keyword, it creates a new instance of a wrapper object for the Object type.

In the code provided, the line console.log(Object()) will return an empty object {} because the Object() function is being called as a regular function. The returned object doesn't have any properties or values assigned to it.

So, the output of console.log(Object()) will be an empty object {}. */

//Q17:
// function MyClass(){

//     const obj1 = new MyClass();
//     const obj2 =  MyClass();

//     console.log(obj1)
//     console.log(obj2)  
// }


// function MyClass() {
//     this.property = "Some value";
// }

// function myFunction() {
//     const obj1 = new MyClass();
//     const obj2 = new MyClass();

//     console.log(obj1);
//     console.log(obj2);
// }

//   myFunction();
/* output= 
MyClass {property: 'Some value'}
MyClass {property: 'Some value'}
*/

//Q19
// function Person(name){
//     this.name=name;
// }
// var p1=new Person("Joy")
// var p2=new Person("Julie")
// Person.prototype.getName= function(){
//     return this.name
// };
//console.log(p1.getName() + " is friend with " + p2.getName());
//output : Joy is friend with Julie

//Q20
// "use strict"
// function bike(){
//     console.log(this.name) 
//     }
//  var name = "Ninja";
// bike();
/* Uncaught TypeError: Cannot read property 'name' of undefined*/
/* In strict mode, when a function is called without any explicit binding, the value of this inside the function is undefined, instead of referring to the global object.

Therefore, when you execute the code bike() in strict mode, this.name would cause an error because this is undefined, and undefined does not have a name property.

So, executing the code in strict mode would result in an error being thrown, indicating that this is undefined and cannot access name. */
/* Strict mode promotes writing cleaner and more maintainable code by discouraging
 the use of deprecated or non-standard features. It prevents the use of this value pointing to the global object in functions and restricts the use of the with statement, both of which are considered bad practices. */

 //Q21 :
// function bike(){
//     console.log(this.name) 
//     }
//  var name = "Ninja";
// bike();
// output: Ninja

//Q22:
// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }
// console.log(typeof(Person))
//output:function
/* The typeof operator is used to determine the type of a value or an expression in JavaScript. However, when you apply typeof to a class, it returns "function". This is because classes in JavaScript are actually special type of functions.
In JavaScript, classes are syntactic sugar over constructor functions. When you define a class using the class keyword, it creates a function under the hood. Therefore, the Person class is essentially a function.
So, the output of console.log(typeof(Person)) will be "function", indicating that Person is a function.  */

//q23:
// function User(name){
//     this.name=name;
//     this.isAdmin=false;
//     return;
// }
// var user =  User("joy")
// console.log(user)

/*  However, there are a couple of issues with the code.

Invocation without new: The User function is invoked without the new keyword, which means it is called as a regular function rather than as a constructor function. As a result, this inside the function will not refer to a new object. Instead, it will refer to the global object (window object in a browser or global object in Node.js).
Missing object creation: Since User is invoked as a regular function, it does not return an object. The return; statement is present in the code, but it does not have any effect in this context.
Therefore, when you execute User("joy"), it assigns name and isAdmin properties to the global object rather than creating a new User object.
Consequently, console.log(user) will output undefined because the User function does not return anything explicitly.
To fix the code and create a User object, you need to use the new keyword when invoking the constructor function: */

//after correction: var user = new User("joy")   . now it will show user object in output

//Q24:
    // function User(name){
    //     this.isAdmin=false;
    //     return name ;
    // }
    // var user =  User("joy")
    // console.log(user)         // joy
    // console.log(User());      // undefined
    // console.log(User("hi"));   //hi


    // with new keyword
    // var user = new User("joy")
    // console.log(user)      //    User {isAdmin: false}


    //function not returning anything
      //function User(name){
        //     this.isAdmin=false;
        //     return  ;       //not returning anything
        // }
        // var user =  User("joy")
        // console.log(user)         // undefined bcz not returning anything
        // console.log(User());      // undefined
        // console.log(User("hi"));   //undefined

//Q25
   
//     class Person{
//         constructor(name,age){
//             this.name=name;
//             this.age=age;
//         }
    
//     // get name(){
//     //     return this._name;
//     // }

//     get Myage(){
//         return this.age;
//     }

//     set Myage(Age){
//         this.age = Age;
//     }

//     // set name(value){
//     //     this._name = value;
//     // }
//    }
//     var person = new Person("james",20)
//     //Which of the following statements will produce an error with the following code?
  
//     //person.name;           // Accessing the name property (getter)
//     //person.name = "Jones"; // Setting the name property (setter)
//     //person.name();         // Invoking the name method (if it exists)
//     //person._name = "Jones"; // Directly accessing the _name property (bypassing the setter)
    
// // console.log(person.name())    it will give Uncaught TypeError: person.name is not a function
//    person.age=30;
//    console.log(person.age)

