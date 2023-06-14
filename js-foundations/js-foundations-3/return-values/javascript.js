/* Tasks */
/* Foundations Pt. 3 */

function compareMin (num1, num2) {
    if (num1 > num2) {
        return num2
    }
    return num1;
}

function powerNum (x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}