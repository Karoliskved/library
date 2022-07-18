let myLibrary = [];
let container = document.querySelector(".container")
let formButton = document.querySelector(".formButton")
const formContainer = document.querySelector('.formContainer')
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}
function displayBooks() {
    for (book of myLibrary) {
        const bookCard = document.createElement('div')
        const bookName = document.createElement('div')
        const bookAuthor = document.createElement('div')
        const bookPages = document.createElement('div')
        const bookRead = document.createElement('div')
        bookName.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;
        bookCard.classList.add("bookCard")
        container.appendChild(bookCard)
        bookCard.appendChild(bookName)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(bookRead)
    }

}
/*const book1=new Book("house of leaves", "Dan", "700", "yes")
console.log(book1)*/
formButton.addEventListener('click', () => {
    if (formContainer.hidden == false) {
        formContainer.hidden = true;
    }
    else {
        formContainer.hidden = false;
    }

}
)
addBookToLibrary("house of leaves", "Dan", "700", "yes")
addBookToLibrary("house of leaves2", "Dan2", "7002", "yes2")
addBookToLibrary("house of leaves3", "Dan3", "7003", "yes3")
displayBooks()