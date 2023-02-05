let myLibrary = [];
const form = document.querySelector("form");
const formSubmitButton = document.querySelector("#form-submit__button");
const displayContainer = document.querySelector(".display-container");
const newBookButton = document.querySelector(".new-book__button");
let bookName = document.getElementById("book-title");
let bookAuthor = document.getElementById("book-author");
let bookPages = document.getElementById("book-pages");
let bookRead = document.getElementById("book-read");
let title = bookName.value;
let author = bookAuthor.value;
let pages = bookPages.value;
let read = bookRead.value;
let newBook;

function toggleForm() {
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

newBookButton.addEventListener("click", toggleForm);

const Book = (title, author, pages, read) => {
  const info = () => {
    return `"${title}" by "${author}", ${pages} pages, ${read}`;
  };
  return {title, author, pages, read, info};
};

function makeBook() {
  newBook = Book(title, author, pages, read);
  return newBook;
}

function getUserInput() {
  title = bookName.value;
  author = bookAuthor.value;
  pages = bookPages.value;
  read = bookRead.value;
}

function addBookToLibrary(book) {
  myLibrary.push(book.info());
}

function updateLibrary(event) {
  getUserInput();
  makeBook();
  addBookToLibrary(newBook);
  displayBookInLibrary();
  toggleForm();
  event.preventDefault();
}

function addRemoveButton() {
  let removeButton = document.createElement("button");
  let removeButtonText = document.createTextNode("Remove");
  removeButton.appendChild(removeButtonText);
  displayContainer.appendChild(removeButton);
}

function printBookDetails() {
  let bookEntry;
  bookEntry = myLibrary[myLibrary.length - 1];
  const newBookEntry = document.createElement("h5");
  const node = document.createTextNode(bookEntry);
  newBookEntry.appendChild(node);
  displayContainer.appendChild(newBookEntry);
}

function displayBookInLibrary() {
  printBookDetails();
  addRemoveButton();
}

formSubmitButton.addEventListener("click", updateLibrary);
