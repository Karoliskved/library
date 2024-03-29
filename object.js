let myLibrary = [];
let container = document.querySelector('.container');
let formButton = document.querySelector('.formButton');
let addButton = document.querySelector('.addButton');
let rmvButton = document.querySelector('.rmvButton');
let readButton = document.querySelector('.readButton');
const formContainer = document.querySelector('.formContainer');
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
// displays a single book as a card
function updateDisplay(book, index) {
  const bookCard = document.createElement('div');
  const bookName = document.createElement('div');
  const bookAuthor = document.createElement('div');
  const bookPages = document.createElement('div');
  const bookRead = document.createElement('div');
  const removeButton = document.createElement('button');
  const readButton = document.createElement('button');
  bookName.textContent = 'Title: ' + book.title;
  bookAuthor.textContent = 'Author: ' + book.author;
  bookPages.textContent = 'Pages: ' + book.pages;
  bookRead.textContent = 'Read: ' + book.read;
  readButton.textContent = 'change read status';
  removeButton.textContent = 'remove book';
  bookCard.classList.add('bookCard');
  removeButton.classList.add('rmvButton');
  readButton.classList.add('readButton');
  bookCard.setAttribute('id', 'card' + index);
  removeButton.setAttribute('id', 'rmvButton' + index);
  readButton.setAttribute('id', 'readButton' + index);
  container.appendChild(bookCard);
  bookCard.appendChild(bookName);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(readButton);
  bookCard.appendChild(removeButton);
  removeButton.addEventListener('click', handleRemove);
  readButton.addEventListener('click', handleRead);
}
//displays all the books
function displayBooks() {
  removeAllChildNodes(container);
  let i = 0;
  for (book of myLibrary) {
    updateDisplay(book, i);
    i++;
  }
}
// rerenders book cards
function handleRemove() {
  let index = this.id.toString();
  console.log(index.slice(-1));
  myLibrary.splice(index.slice(-1), 1);
  console.log(myLibrary);
  displayBooks();
}
function handleRead() {
  let index = this.id.toString().slice(-1);
  console.log(myLibrary[index].read);
  if (myLibrary[index].read == 'no') myLibrary[index].read = 'yes';
  else myLibrary[index].read = 'no';
  displayBooks();
}
//toggles form visibility
formButton.addEventListener('click', () => {
  if (formContainer.hidden == false) {
    formContainer.hidden = true;
  } else {
    formContainer.hidden = false;
  }
});
//takes book info from the form adds to library and then rerenders the scrren
const form = document.querySelector('#bookForm');
function handleForm(event) {
  event.preventDefault();
  let status = 'no';
  if (document.getElementById('true').checked == true) {
    status = 'yes';
  }
  addBookToLibrary(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages').value,
    status
  );
  updateDisplay(myLibrary[myLibrary.length - 1], myLibrary.length - 1);
}
form.addEventListener('submit', handleForm);

//dummy books
addBookToLibrary('house of leaves', 'Dan', '700', 'yes');
addBookToLibrary('house of leaves2', 'Dan2', '7002', 'yes');
addBookToLibrary('house of leaves3', 'Dan3', '7003', 'no');
displayBooks();
