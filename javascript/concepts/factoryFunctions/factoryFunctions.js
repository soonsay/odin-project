function makeAdding (firstNumber) {

    const first = firstNumber;
    return function resulting (secondNumber) {

        const second = secondNumber;
        return first + second;
    }
}

const add5 = makeAdding(5);
console.log(add5(2));

const add6 = makeAdding(6);
console.log(add6(2));

// This is a closure, we defined the first number when we initialized the function to a variable
// Calling the variable executes the outer function, and the number passed will be handed to the inner function

  // Constructor

const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
  }


  // Factory

  function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };

    // Make a bunch of functions and then return them
  }
  
  const josh = createUser("josh");
  josh.giveReputation();
  josh.giveReputation();
  
  console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
  });

  // The factory creates a user named josh, and josh inherits all the functions a user has (private)
  // reputation is not exposed, since get and give have access to it and that's all we need
  // How to extend a user into a player factory?

  function createPlayer (name, level) {
    // declare the assets you need from the Factory you're referencing
    const { getReputation, giveReputation } = createUser(name);

    // extend the user with a new function (in this case, increaseLevel), return both the User functions and the new increaseLevel function)
    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
  }

  // IIFE - immediately invoked function expression
  // Useful when you don't need to produce multiple objects but instead intend to nest functionality - ENCAPSULATION, NAMESPACING
  // Syntax is wrapping the function expression in parentheses and immediately invoking it


  const calculator = (function () { // the () is just an anonymous function, reminder
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div};
  }) (); // immediate invocation

  console.log(calculator.add(3, 12));