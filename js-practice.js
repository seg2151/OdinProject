// function Book(title, author, numPages, isRead) {
//   this.title = title
//   this.author = author
//   this.numPages = numPages
//   this.isReadOutput = function() {
//     if (this.isRead){
//       return "read already"
//     }
//     else {
//       return "not read yet"
//     }
//   }
//   this.info = function() {
//     return `${this.title} by ${this.author}, ${this.numPages}, ${this.isReadOutput()}`
//   }
// }
//
// const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", false)
// console.log(theHobbit.info())


function Game() {
}

Game.prototype.sayTitle = function() {
  console.log(this.title)
}
Game.prototype.info = function() {
  console.log(`This game is a ${this.gameType} called ${this.title}`)
}

function videoGame(title) {
  this.title = title
  this.gameType = "Video Game"
}

videoGame.prototype = Object.create(Game.prototype)

function boardGame(title) {
  this.title = title
  this.gameType = "Board Game"
}

boardGame.prototype = Object.create(Game.prototype)

const ffseven = new videoGame("Final Fantasy 7")
const settlers = new boardGame("Settlers of Catan")
ffseven.info()
settlers.info()
