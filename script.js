const form = document.querySelector("form");
const bookName = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookPages = document.getElementById("book-pages");
const bookRead = form.elements["book-read"];
const addNewBookButton = document.getElementById("newbook-start-add");
const inputsContainer = document.getElementById("inputs-container");
const backdrop = document.getElementById("backdrop");
const formCancelButton = document.getElementById("form-cancel-button");
const formSubmitButton = document.getElementById("form-submit__button");
const libraryDisplayList = document.body.lastElementChild;
const nonRadioInputs = inputsContainer.querySelectorAll(
  ".non-radio-inputs input"
);
let myLibrary = [];
let newBook;
let bookPositionInLibrary;

const toggleBackdrop = function () {
  backdrop.classList.toggle("visible");
};

const hideDefaultDisplay = () => {
  const defaultDisplay = document.querySelector(".library-display__default");
  defaultDisplay.classList.add("invisible");
};

const toggleInputsContainer = function () {
  inputsContainer.classList.toggle("visible");
  toggleBackdrop();
  clearFormInputs();
};

function clearFormInputs() {
  for (const input of nonRadioInputs) {
    input.value = "";
  }
}

addNewBookButton.addEventListener("click", toggleInputsContainer);
backdrop.addEventListener("click", toggleInputsContainer);
formCancelButton.addEventListener("click", toggleInputsContainer);

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function makeBook() {
  const bookTitleValue = bookName.value;
  const bookPagesValue = bookPages.value;
  const bookAuthorValue = bookAuthor.value;
  const bookReadValue = bookRead.value;
  newBook = new Book(
    bookTitleValue,
    bookAuthorValue,
    bookPagesValue,
    bookReadValue
  );
}

function addBookToLibrary() {
  myLibrary.push(newBook.info());
}

const deleteBook = function (bookIndex) {
  myLibrary.splice(bookIndex, 1);
  displayBookInLibrary();
};

function displayBookInLibrary() {
  let bookToBeDisplayed;
  libraryDisplayList.innerHTML = "";
  for (const books of myLibrary) {
    const removeButtonOnDisplay = document.createElement("button");
    bookToBeDisplayed = books;
    bookPositionInLibrary = myLibrary.indexOf(books);
    removeButtonOnDisplay.className = "display-button";
    removeButtonOnDisplay.textContent = `Remove Book`;
    const latestBookToDisplay = document.createElement("li");
    latestBookToDisplay.innerHTML = `
  <div>"${bookToBeDisplayed}"</div>
  `;
    latestBookToDisplay.appendChild(removeButtonOnDisplay);
    removeButtonOnDisplay.addEventListener(
      "click",
      deleteBook.bind(null, bookPositionInLibrary)
    );
    libraryDisplayList.appendChild(latestBookToDisplay);
  }
}

function submitForm() {
  makeBook();
  addBookToLibrary();
  displayBookInLibrary();
  hideDefaultDisplay();
  toggleInputsContainer();
}

formSubmitButton.addEventListener("click", submitForm);
