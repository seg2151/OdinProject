let myLibrary = [];
firstBook = new Book("Kingdoms", "Hevi Balsakz", 309, "No")
secondBook = new Book("Kingdoms 2", "Super Balsakz", 405, "Yes")
thirdBook = new Book("Kingdoms 3", "Big Balsakz", 4050, "Yes")

myLibrary.push(firstBook)
myLibrary.push(secondBook)
myLibrary.push(thirdBook)
console.log(myLibrary)
displayBooks()


function Book(title, author, numPages, isRead) {
  this.title = title
  this.author = author
  this.numPages = numPages
  this.isRead = isRead
}

function displayBooks() {
  target = document.querySelector("#book-list")
  for (const i in myLibrary) {
    book = myLibrary[i]
    console.log(book)
    let newLi = target.appendChild(document.createElement('li'))
    newLi.id = i
    newLi.append(book.title)
    let button = newLi.appendChild(document.createElement('button')).textContent = "Delete"
    button.id = i

  }

}

function addBookToLibrary() {
  // const bookTitle = window.prompt("Enter the title of the book:")
  // const bookAuthor = window.prompt("Enter the author of the book:")
  // const bookNumPages = window.prompt("Enter the number of pages of the book:")
  // const bookIsRead = window.prompt("Enter yes if you've read the book, no otherwise:")
  let newBookForm = document.getElementById('new-book')
  console.log('AHHHHHHH')
  alert('BOOK SUBMITTED')


  console.log(newBookForm)
  // return false
  // const newBook = new Book(bookTitle, bookAuthor, bookNumPages, bookIsRead)
  // console.log(newBook)
  // myLibrary.push(newBook)
  // displayBooks()
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
