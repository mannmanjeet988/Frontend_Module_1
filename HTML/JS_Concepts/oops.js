// console.log("OOPS");
// PS E:\Web_Dev\HTML\Restaurant_website> code .
// PS E:\Web_Dev\HTML\Restaurant_website> cd ..
// PS E:\Web_Dev\HTML> mkdir new_project
// Why OOPS?

// Factory function vs Constructor -
// https://dev.to/bchau/factory-functions-vs-constructors-500m#:~:text=A%20constructor%20function%20is%20another,and%20the%20keyword%20%22this%22.


/* Encapsulation means keeping similar data inside {}    */

// var user_1_name = "Avi Vashishta";
// var user_1_profession = "Instructor";
// var user_1_gender = "Male";
// var user_1_phone = "9999999999";
// var user_1_email = "avivashishta@gmail.com";
// var user_1_history = "History";

// var user_2_name = "Sunil";
// var user_2_profession = "Student";
// var user_2_gender = "Male";
// var user_2_phone = "9999999999";
// var user_2_email = "sunil@gmail.com";
// var user_2_history = "History";

// var user_3_name = "Sunil 2";
// var user_3_profession = "Student";
// var user_3_gender = "Male";
// var user_3_phone = "9999999999";
// var user_3_email = "sunil@gmail.com";
// var user_3_history = "History";

// JSON - JavaScript Object Notation

/*There are three ways to create objects:
 1. creating object directly e.g. user1
 2. Using factory function e.g. user2
 3. Using constructor e.g. user3
*/


var user1 = {
  name: "Avi",
  email: "avi@gmail.com",
  phone: "99999999",
  history: "histiry",
  gender: "male ",
};

console.log("User1>>>", user1);

//Factory Function
function createUser(nameVal, emailVal, phoneVal, historyVal, genderVal) {
  return {
    name: nameVal,
    email: emailVal,
    phone: phoneVal,
    history: historyVal,
    gender: genderVal,
  };
}

var user2 = createUser(
  "Ajay",
  "ajay@gmail.com",
  "98888888",
  "historyt",
  "male"
);

console.log("User2>>>", user2);

// There are multiple ways to create what we call as an object in JS.
// What is an object?

// An Object is nothing but it is an instance of a class
// What is a class? A class is a blue print.

// Every user will have a name, email,phone, history, gender --> Blueprint that I have created,

class User {
  constructor(nameVal, emailVal, phoneVal, historyVal, genderVal) {
    this.name = nameVal;
    this.email = emailVal;
    this.phone = phoneVal;
    this.history = historyVal;
    this.gender = genderVal;
  }

  getUserName() {
    return "The User's Name is " + this.name;
  }

  speak() {
    return "The User speaks their native language";
  }
}

// instead of saying key,value pair -> I will call name,email,phoone,etc. is a property

// Constructor is a function which gets called when you first initialise an object. Whenever you create an object, its constructor function gets called,
// How do you create a new object? By using the keyword new.
const user3 = new User(
  "Ajay 2",
  "ajay2@gmail.com",
  "22222222",
  "history2",
  "male 2"
);
 console.log(user3);

 /*output will be visible as follows for user1, user2 and user3
 User1>>> {name: 'Avi', email: 'avi@gmail.com', phone: '99999999', history: 'histiry', gender: 'male '}email: "avi@gmail.com"gender: "male "history: "histiry"name: "Avi"phone: "99999999"[[Prototype]]: Object
 User2>>> {name: 'Ajay', email: 'ajay@gmail.com', phone: '98888888', history: 'historyt', gender: 'male'}
 User {name: 'Ajay 2', email: 'ajay2@gmail.com', phone: '22222222', history: 'history2', gender: 'male 2'}
 prototype in case of user1 and user2 is :
 [[Prototype]]: Object
 constructor: ƒ Object()
 but in case of user3
 [[Prototype]]: Object
constructor: class User*/

// console.log(user3.getUserName());

// const user4 = new User(
//   "Sunil",
//   "sunil@gmail.com",
//   "8127261219",
//   "history uqyg",
//   "male"
// );

// console.log(user4);

// function createUser(nameVal, emailVal, phoneVal, historyVal, genderVal) {
//   return {
//     name: nameVal,
//     email: emailVal,
//     phone: phoneVal,
//     history: historyVal,
//     gender: genderVal,
//   };
// }

// console.log(user1.name, user2.name, user3.name);

// function helloWorld() {
//   return "Hello world";
// }

// console.log(helloWorld);
// console.log(helloWorld());

// Blueprint -> Every bank account needs to have a name, phone, aadhar, accountNumber
// class BankAccount {
//   #accountNumber;
//   constructor(name, phone, aadhaar, accountNumber) {
//     this.name = name;
//     this.phone = phone;
//     this.aadhaar = aadhaar;
//     this.#accountNumber = accountNumber; //make this private?
//   }

//   getMaskedAccountNumber() {
//     return (
//       "XXXX" +
//       this.#accountNumber.slice(4, 8) +
//       "XXXX" +
//       this.#accountNumber.slice(-4)
//     );
//   }

//   #getAccountNumber() {
//     return this.#accountNumber;
//   }
// }

// var aviAccount = new BankAccount(
//   "Avi Vashishta",
//   "9299192192",
//   "1234 5678 1234",
//   "1234567890123"
// );

// console.log("My Account>>>> ", aviAccount);

// function sendSMS() {
//   console.log(
//     `From Your Account - ${aviAccount.getMaskedAccountNumber()} 10/- has been debitted`
//   );
// }
// sendSMS();

// console.log(aviAccount.#accountNumber);
// console.log(aviAccount.#getAccountNumber());

// removal of PII
// PII = Personally Identifiable Information
// Aadhar, phone number, accountNumber , fullName, pan
// age, state, degree , job , interests

// class Animal {
//   speak() {
//     return "Animal speaks";
//   }
//   eats() {
//     return "Animal Eats";
//   }
// }

// Extends is the keyword that we use, so that the child class can access the properties of the parent class.
// The child extends the parent.
// class Dog extends Animal {
//   constructor(color, breed) {
//     super();          // super keyword refers to parent.
//     this.color = color;   // this keyword refers to object.
//     this.breed = breed;
//     this.age = 4;
//   }
//   speak() {
//     return "Dog barks! ";
//   }
// }

// var tommy = new Dog("Brown", "German Shehpard");
// var myAnimal = new Animal();
// console.log(myAnimal.breed);
// console.log(tommy.speak());

class Person {
    constructor(nameVal, speciesVal) {
      this.name = nameVal;
      this.species = speciesVal;
      this.mammal = true;
    }
  
    speak() {
      return "Person speaks native language";
    }
  }
  
  class Student extends Person {
    constructor(nameVal, species, id) {
      // super keyword for calling the above - constructor of the parent
      // class constructor
      super(nameVal, species);
      this.id = id;
    }
  }
  
  var student1 = new Student("Sahil", "Human", "1");
  
  class Instructor extends Person {
    constructor(name, species, classes) {
      // super keyword for calling the above
      // class constructor
      super(name, species);
      this.classes = classes;
    }
  
    speak() {
      return "Instructor can only speak english";
    }
  
    speakAtHome() {
      return super.speak();
    }
  }
  
  var instructor1 = new Instructor("Avi", "Human", "F3");
  console.log(instructor1);
  // console.log(student1.speak());
  console.log(instructor1.speak());
  // console.log(instructor1.speakAtHome());
  
  class GrandParent {
    constructor() {
      this.generation = 3;
    }
  }
  
  class Parent extends GrandParent {
    constructor(surname) {
      super();
      this.surname = surname;
    }
    speak() {
      return "parent is speaking";
    }
  }
  
  class Child extends Parent {
    constructor(firstname, surname) {
      super(surname);
      this.firstname = firstname;
    }
    speak() {
      return "child is speaking";
    }
    parentSpeak() {
      return super.speak();
    }
  }
  
  var me = new Child("Avi", "Vashishta");
  
  // me.firstname;
  // me.surname;
  
  console.log("ME", me.generation);
  
  // class sham {
  //   constructor() {
  //     this.name = "sham";
  //   }
  
  //   speak() {
  //     console.log(this.name + " speaks.");
  //   }
  // }
  
  // class ram extends sham {
  //   constructor() {
  //     super();
  //     this.name2 = "ram";
  //   }
  
  //   speak() {
  //     super.speak();
  //     console.log(this.name2 + " speaks louder.");
  //   }
  // }
  
  // let r = new ram();
  // r.speak()   