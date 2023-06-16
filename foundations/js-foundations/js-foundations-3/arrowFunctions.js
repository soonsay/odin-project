// Arrow functions are function Expressions, not declarations
// Meaning they play by FE rules, not FD.
// Standard arrow function

let double = n => n * 2;

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Greetings!");

welcome();


// Multiline arrow function

let sum = (a, b) => {
    let result = a+ b;
    return result; // If curly braces are used, need an explicit return
};

alert (sum(1, 2)); // 3

// Task, rewrite the following as arrow function
function ask (question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() {alert("You agreed."); },
    function() {alert("You canceled the execution."); }
);

// Rewritten ask call

ask(
    "Do you agree",
    () => alert("You agreed"), // Empty parentheses represents no arguments, represents the yes function
    () => alert("You cancelled the execution") // Represents the No function
);