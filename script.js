let myLibrary = [];
const form = document.querySelector("form");
const formSubmitButton = document.querySelector("#form-submit__button");
let bookName = document.getElementById("book-title").value;
let bookAuthor = document.getElementById("book-author");
let bookPages = document.getElementById("book-pages").value;



function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(book) {
  myLibrary.push(book.info());
  console.log(myLibrary);
}

function displayBookInLibrary() {
  for (books of myLibrary) {
    console.log(books); 
  }
}

function clicked(event) {
  console.log(bookAuthor.name);
  event.preventDefault();
}

formSubmitButton.addEventListener("click", clicked);

displayBookInLibrary();



// function makeBook() {
//   Book()
// }

const book1 = new Book("Harry Potter", "J.K. Rowlings", 150, "read");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not yet read");
