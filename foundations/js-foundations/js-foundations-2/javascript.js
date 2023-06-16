/* Tasks */
/* Fundamentals Pt.2  TheOdinProject */

let value = prompt("Give me a number!", '');

if (value > 0) {
    alert("1");
} else if (value == 0) {
    alert("0");
} else {
    alert("-1");
}


let result = (a + b < 4) ? 'Below': 'Over';

let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' : '';


let a = +prompt('a?', '');

switch(a) {
    case 0:
        alert(0);
        break;
    
    case 1:
        alert(1);
        break;
    
    case 2:
    case 3:
        alert( '2,3');
        break;
}