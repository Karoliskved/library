let myLibrary = [];
let container = document.querySelector(".container")
let formButton = document.querySelector(".formButton")
let addButton = document.querySelector(".addButton")
let rmvButton = document.querySelector(".rmvButton")
let readButton = document.querySelector(".readButton")
const formContainer = document.querySelector('.formContainer')
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read

}
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}
function displayBooks() {
    removeAllChildNodes(container)
    let i=0;
    for (book of myLibrary) {
        updateDisplay(book, i)
        i++;
    }

}
function updateDisplay(book, index){
    const bookCard = document.createElement('div')
    const bookName = document.createElement('div')
    const bookAuthor = document.createElement('div')
    const bookPages = document.createElement('div')
    const bookRead = document.createElement('div')
    const removeButton=document.createElement('button')
    const readButton=document.createElement('button')
    bookName.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookRead.textContent = "Read: "+book.read;
    readButton.textContent="read"
    removeButton.textContent="remove book"
    bookCard.classList.add("bookCard")
    removeButton.classList.add("rmvButton")
    readButton.classList.add("readButton")
    bookCard.setAttribute('id', "card"+index)
    removeButton.setAttribute('id', "rmvButton"+index)
    readButton.setAttribute('id', "readButton"+index)
    container.appendChild(bookCard)
    bookCard.appendChild(bookName)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(bookRead)
    bookCard.appendChild(readButton)
    bookCard.appendChild(removeButton)
    removeButton.addEventListener('click', handleRemove)
    readButton.addEventListener('click', handleRead)


}
function handleRemove(){
    let index=(this.id).toString()
    console.log(index.slice(-1))
    myLibrary.splice(index.slice(-1), 1)
    console.log(myLibrary)
    displayBooks()
}
function handleRead(){
    let index=((this.id).toString()).slice(-1)
    console.log(myLibrary[index].read)
    if(myLibrary[index].read=='no')
        myLibrary[index].read='yes'
    else
        myLibrary[index].read='no'
    displayBooks()

}
function getFormInfo(){
    console.log("test")
    addBookToLibrary("house of leaves4", "Dan4", "7004", "yes4")
   //addBookToLibrary(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('true').value)
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
addButton.addEventListener('click', () => {
    let status="no"
    if(document.getElementById('true').value=='checked')
    {
        status="yes"
    }
    addBookToLibrary(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, status)
    updateDisplay(myLibrary[myLibrary.length-1], myLibrary.length-1)
}
)

addBookToLibrary("house of leaves", "Dan", "700", "yes")
addBookToLibrary("house of leaves2", "Dan2", "7002", "yes")
addBookToLibrary("house of leaves3", "Dan3", "7003", "no")
displayBooks()