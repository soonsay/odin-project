// Getters and Setters  are referred to as accessor properties
let obj = {
    get propName() {

    },

    set propName(value) {

    }
};


let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};



alert(user.fullName); // John Smith
user.fullName = "test";

// fullName is a virtual property, not a data property. You won't see X = something, you'll just see read and write controls of it via get and set. 

// Accessor descriptor may have get, set, enumerable, or configurable
// Enumerable - property that can be included in and visited during loops or other iterations
// Configurable - can have its attributes changed

// defining fullName, not a data property - accessor property
Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    // the set creates two data properties
    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
})


// Smart Getters/Setters
// Use them as a wrapper over the real values

let user = {
    get name() {
        return this._name;  // _name is the "real" property
    },

    set name(value) {
        if (value.length < 4) {
            alert("Name too short");
            return;
        }
        this._name = value; // data grooming/input validation by first checking if the set is valid before setting name
    }
};

// Compatibility
// Rather than refactor old code all the time, getters and setters can be introduced to work with existing code

function User(name, birthday) {
    this.name = name;
    this.birthday = bithday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new DataTransfer().getFullYear();
            return todayYear - this.birthday.getFullYear();

        }
    });
}

let john = new User("John", new Date(1992, 6, 1));