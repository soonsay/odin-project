// Function declaration
// Usable anywhere within the scope it is defined, can be called earlier than defined
// Javascript initialization step checks for global Function Declarations in it

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// Function expression
// A function created inside an expression or inside another syntax construct
// Created when execution reaches it and is only usable from that moment

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);


