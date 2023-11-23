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
    // console.log(myLibrary);
}

function createBookCard(book) {
    let newBook = document.createElement('div');
    newBook.classList.add('bookCard')
        for (const attr in book) {
            let property = document.createElement('div');
            let formattedAttribute = attr.charAt(0).toUpperCase() + attr.slice(1);
            property.innerText = formattedAttribute + ': ' + book[attr];
            newBook.appendChild(property);
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
    console.log('edit');
    let elem = document.querySelectorAll('.bookCard>i')
    for (const element of elem) {
        element.classList.toggle('deleteHidden');
    } 
}


let book1 = new Book('The Dark Tower', 'Stephen King', 1243, false);