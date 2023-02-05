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

function Book(title, author, pages, read) {
  const info = () => {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
  return {
    title,
    author,
    pages,
    read,
    info,
  };
}

function makeBook() {
  const bookTitleValue = bookName.value;
  const bookPagesValue = bookPages.value;
  const bookAuthorValue = bookAuthor.value;
  const bookReadValue = bookRead.value;
  newBook = Book(
    bookTitleValue,
    bookAuthorValue,
    bookPagesValue,
    bookReadValue
  );
}

function addBookToLibrary() {
  myLibrary.push(newBook.info());
}

function displayBookInLibrary() {
  const latestBookToDisplay = document.createElement("li");
  latestBookToDisplay.textContent = `${myLibrary[myLibrary.length - 1]}`;
  libraryDisplayList.appendChild(latestBookToDisplay);
}

function submitForm(event) {
  event.preventDefault();
  makeBook();
  addBookToLibrary();
  displayBookInLibrary();
  hideDefaultDisplay();
  toggleInputsContainer();
}

formSubmitButton.addEventListener("click", submitForm);
