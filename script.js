class Book {
  constructor(title, pages, author, read) {
    this.id = Math.random().toString().substring(2, 7); //Unique ID for each book
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
  }
}

const book1 = new Book("Wow", 9, "Chris", false);
const book2 = new Book("Peace", 3, "Joe", false);
const book3 = new Book("Hello", 19, "George Lit", true);

const myLibrary = [book1, book2, book3];

const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".form");
const newBookButton = document.querySelector(".new-book");
const submitBookButton = document.querySelector(".submit-book");
const booksContainer = document.querySelector(".books-container");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

function addBookToLibrary(e) {
  bookTitle = title.value;
  bookAuthor = author.value;
  bookPages = parseInt(pages.value);
  bookRead = read.checked;
  const newBook = new Book(bookTitle, bookPages, bookAuthor, bookRead);
  myLibrary.push(newBook);
  displayBooks(myLibrary);
  e.preventDefault();
}

function removeBook(id) {
  const bookIndex = myLibrary.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    console.log(bookIndex);
    myLibrary.splice(bookIndex, 1);
    displayBooks(myLibrary);
  }
}

function isReadToggle(id) {
  const book = myLibrary.find((book) => book.id === id);
  if (book) {
    book.read = !book.read;
    displayBooks(myLibrary);
  }
}

newBookButton.addEventListener("click", () => {
  const hidden = formContainer.classList;
  hidden.toggle("hidden");
});

submitBookButton.addEventListener("click", addBookToLibrary);

function displayBooks(books) {
  booksContainer.innerHTML = "";
  // loop through array
  // display each book
  books.forEach((book) => {
    console.log(book);
    const b = booksContainer.appendChild(document.createElement("div"));
    b.className = "book";
    const title = (b.appendChild(
      document.createElement("p")
    ).textContent = `Title: ${book.title}`);
    const author = (b.appendChild(
      document.createElement("p")
    ).textContent = `Author: ${book.author}`);
    const pages = (b.appendChild(
      document.createElement("p")
    ).textContent = `Pages: ${book.pages}`);
    const read = (b.appendChild(
      document.createElement("p")
    ).textContent = `Read? ${book.read}`);
    const removeBookButton = b.appendChild(document.createElement("button"));
    removeBookButton.textContent = "Remove Book";
    removeBookButton.addEventListener("click", function () {
      removeBook(book.id);
    });
    const isRead = b.appendChild(document.createElement("button"));
    isRead.textContent = "Read?";
    isRead.addEventListener("click", function () {
      isReadToggle(book.id);
    });
  });
}

displayBooks(myLibrary);
