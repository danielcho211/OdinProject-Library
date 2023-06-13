const addButton = document.querySelector('button.addButton');
const bookContainer = document.querySelector('div.book-container');
const submitbutton = document.querySelector('button.submit');
const formContainer = document.querySelector('.popUp');
const closeButton = document.querySelector('button.close-button');
const overLay = document.querySelector('div#overlay');

let myLibrary = [];

const book1 = new book("sdsd", "asdss", "sds", "sd", true);

bookContainer.addEventListener('click', (e) => {
    if(e.target.matches("div.isRead")) {
        const clickedDiv = e.target;

        if(clickedDiv.innerText === "Not Read") {
            clickedDiv.innerText = "Read";
        }
        else {
            clickedDiv.innerText = "Not Read";
        }
    }

    if(e.target.matches("button.remove-button")) { 
        bookContainer.removeChild(e.target.closest(".books"));
    }
})

closeButton.addEventListener('click', () => {
    formContainer.style.display = 'none';
    overLay.classList.remove('active');
})

submitbutton.addEventListener('click', (e) => {
    e.preventDefault();
    let newTitle = document.getElementById('title');
    let newAuthor = document.getElementById('author');
    let newPages = document.getElementById('pages');
    let newReadStatus = document.getElementById('read-status');

    let newBook = new book(newTitle.value, newAuthor.value, newPages.value, newReadStatus.checked, true)
    addBookToLibrary(newBook);

    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
    newReadStatus.checked = false;

    formContainer.style.display = 'none';
    overLay.classList.remove('active');
})

addButton.addEventListener('click', () => {
    formContainer.style.display = 'block';
    overLay.classList.add("active");
})

function book(title, author, pages, read, isNewBook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.isNewBook = true;
    this.info = function() {
        return `${this.title}, ${this.author}, ${this.pages} pages, ${read}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    sort();
}

function sort() {
    myLibrary.forEach((books) => {
        if(books.isNewBook) {

            let newBook = document.createElement('div');
            newBook.classList.add('books');
            books.isNewBook = false;
            bookContainer.appendChild(newBook);

            let bookTitle = document.createElement('div');
            bookTitle.classList.add('book-title');
            bookTitle.innerText = books.title;

            let bookAuthor = document.createElement('div');
            bookAuthor.classList.add('book-author');
            bookAuthor.innerText = books.author;

            let pagesRead = document.createElement('div');
            pagesRead.classList.add('pages-read');
            pagesRead.innerText = books.pages;
            
            let isRead = document.createElement('div');
            isRead.classList.add('isRead');
            console.log(isRead);
            if(books.read === true){
                isRead.innerText = "Read";
            }
            else
            {
                isRead.innerText = "Not Read";
            }

            let removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.innerText = "Remove Book"

            newBook.appendChild(bookTitle);
            newBook.appendChild(bookAuthor);
            newBook.appendChild(pagesRead);
            newBook.appendChild(isRead);
            newBook.appendChild(removeButton);

        }
        else{
            return;
        }
    })
}