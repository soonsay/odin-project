function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(string) {
    let firstLetter = string.charAt(0);

    let remainingLetters = string.substring(1);

    let firstLetterCap = firstLetter.toUpperCase();

    let capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
}

function lastLetter(string) {
    lastLetter = string.charAt(string.length - 1);
    return lastLetter;
}
