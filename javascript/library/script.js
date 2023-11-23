const container = document.querySelector('.container')
const libraryContainer = document.querySelector('.libraryContainer')
const bookForm = document.querySelector('[name="bookForm"]')

const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => {displayModal(dialog)})

const editButton = document.querySelector('.edit');
editButton.addEventListener('click', () => {enterEdit()})




bookForm.addEventListener("submit", function(event){
    console.log(event)


    const formData = new FormData(bookForm);
    
    let title, author, pages, read;
    for (const [key, value] of formData.entries()) {
        switch(key) {

            case 'title':
                title = value;
                break;
            case 'author':
                author = value;
                break;
            case 'pages':
                pages = value;
                break;
            case 'read':
                read = true;
        }
    }
    if(read != true) {
        read = false;
    }

    let book = new Book(title, author, pages, read)
    addBookToLibrary(book);


    event.preventDefault();
    closeModal(dialog);
    clearForm(bookForm);
})

const dialog = document.querySelector('#dialog')

const myLibrary = [];
const defaultLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    createBookCard(book);
}

function createBookCard(book) {
    let newBook = document.createElement('div');
    newBook.classList.add('bookCard')
        for (const attr in book) {
            let property = document.createElement('div');
            let formattedAttribute = attr.charAt(0).toUpperCase() + attr.slice(1);

            if (attr == 'read') {
                let readToggle = document.createElement('button');
                readToggle.classList.add('readToggle');
                readToggle.addEventListener('click', () => {changeReadStatus(book, readToggle)})
                readToggle.innerText = book[attr];
                if (book[attr] == true) {
                    readToggle.classList.add('read');
                    readToggle.innerHTML = '<i class="fa-solid fa-check" style="color: #00ae00;"></i>'
                }
                else {
                    readToggle.classList.add('notRead');
                    readToggle.innerHTML = '<i class="fa-solid fa-x" style="color: #ff1515;"></i>'
                }


                property.innerText = formattedAttribute + ': '
                property.appendChild(readToggle);
                newBook.appendChild(property);
            }
            else {
                property.innerText = formattedAttribute + ': ' + book[attr];
                newBook.appendChild(property);
            }
        }
        let deleteProp = document.createElement('i');
        deleteProp.addEventListener('click', () => deleteBook(deleteProp))
        deleteProp.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        deleteProp.classList.add('deleteButton');
        deleteProp.classList.add('deleteHidden')
        newBook.appendChild(deleteProp);
        

    libraryContainer.appendChild(newBook);

}


function displayLibrary(library) {
    for (const book in library) {
        addBookToLibrary(book)
    }
}

function displayModal(dialog) {
    dialog.showModal();
}

function closeModal(dialog) {
    dialog.close()
}

function clearForm(form) {
    form.reset();
}

function deleteBook(book) {
    console.log(book);
    book.parentElement.classList.add('delete');
    document.querySelector('.delete').remove();
}

function enterEdit() {
    let elem = document.querySelectorAll('.bookCard>i')
    for (const element of elem) {
        element.classList.toggle('deleteHidden');
    } 
}

function changeReadStatus(book, elem) {

    if (book.read == true) {
        elem.innerHTML = '<i class="fa-solid fa-x" style="color: #ff1515;"></i>'
        book.read = false;
    }
    else {
        elem.innerHTML = '<i class="fa-solid fa-check" style="color: #00ae00;"></i>'
        book.read = true;
    }
    console.log(book.read);
}

let book1 = new Book('Wizard and Glass', 'Stephen King', 928, true);

addBookToLibrary(book1);
