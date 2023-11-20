const container = document.querySelector('.container')

const content = document.createElement('div');
content.classList.add('content')

const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => {displayModal(dialog)})

const dialog = document.querySelector('#dialog')

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function displayLibrary (library) {

}

function displayModal (dialog) {
    dialog.showModal();
}

let book = new Book('The Gunslinger', 'Stephen King', '101', true);

addBookToLibrary(book);
console.log(myLibrary);
console.log(myLibrary[0])

container.appendChild(content);