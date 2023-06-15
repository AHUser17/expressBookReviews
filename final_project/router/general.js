const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(JSON.stringify(books,null,4));
  //return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  res.send(books[isbn])
  //return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const author = req.params.author; //la variable author es el parametro author del request
  const bookKeys = Object.keys(books);//la variable bookKeys toma los valores de las kes dentro de books
  let booksByAuthor = [];//declaramos la variable booksByAuthor que es una lista vacia
  let key;//declaramos la variable key

  for (let i = 0;i<bookKeys.length;i++) { //hacemos un for donde i inicia en el valor 0 y va aumentando de a uno siempre y cuando el valor sea inferior al largo de las key de la lista books (bookKeys)
    key = bookKeys[i]; //key adquiere su valor, en esta variable ponemos el valor de la ke que esta dentro de la lista
    if (books[key].author === author) { //utilizamos la key para acceder al libro y tomar el dato author. si el autor de ese libre  es igual a la variable author...
        booksByAuthor.push(books[key]); //agregamos ese elemento a la lista antes vacia de booksbyauthor
    }
  }

  res.send(booksByAuthor) //retornamos el valor de booksbyauthor luego de finalizado el for
  //return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
