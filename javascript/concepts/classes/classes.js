// A class is a type of function
class User {
    constructor(name) {this.name = name; }
    sayHi() {alert(this.name); } 
}

// alert(typeof User); // function

// The class constructor creates a function named User that becomes the result of the class declaration
// Any class methods are stored in User.prototype
// So, to be more precise:

// alert(User === User.prototype.constructor); // true

// Class elements can be characterized by 3 aspects:

// Kind: Getter, setter, method, or field
// Location: Static or instance
// Visibility: Public or private

// extends keyword is used in class declarations/expressions to create a child class as an extension of another constructor

class Cat {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat {
    speak() {
        console.log(`${this.name} roars. He is a ${this.type}`);
    }
}

class superCat extends Lion {
    constructor(name, type) {
        super(name, type);
        this.name = name;
        this.type = type;
    }

        speak() {
            console.log(`${this.name} screams. He is a ${this.type}`);
        }
    }

const l = new Lion("Fuzzy", "RegularCat");
const s = new superCat("Richter", 'Supercat');
l.speak();
s.speak();

// static keywords defines a static method or field for a class
// Defined on the class itself rather than on each instance
// Methods are often used to create utility functions for an application, whereas fields are used for cached/fixed-config or any other data that doesn't need to be replicated across instances.

