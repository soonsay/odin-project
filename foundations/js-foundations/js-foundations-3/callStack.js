// Call stack functions on LIFO principle (last in, first out)

// When executing a script, JS engine creates a global execution context and pushes it
// on top of the call stack. Whenever a function is called, JS creates a function
// execeution context for the function, pushes on top of call stack, starts execution

// If a function calls another function, JS does the same thing and pushes that
// secondary function call on top of the call stack

// When the current function completes, JS pops it off the stack and resumes execution
// where it left off.

function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

// In the above example, GEC (global execution context) enters creation phase (creates
// a main() or global() function) and moves to execution phase.

// JS creates FEC for average function and pushes to top of stack
// JS starts executing average because it is on top of the stack
// Becaus avg calls the add function, JS creates another FEC for add() & adds to stack
// JS executes the add function and pops it off the stack
// JS finishes executing avg with the value returned by add, pops avg off stack
// Now the call stack is empty so the script stops executing

// Stack order at each step: Main, Main=>Avg, Main=>Avg=>Add, Main=>Avg, Main, Empty