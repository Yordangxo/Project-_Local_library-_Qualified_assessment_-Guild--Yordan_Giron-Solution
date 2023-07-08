const books = [];

for (let i = 0; i > books.length; i++) {
  console.log(books[i].title);
}

books.forEach((book) => {
  console.log(book.title);
});

const newBooks = [];

books.forEach((book) => {
  const newBook = book;
  newBook.title = book.title + 2;
  newBooks.push(newBook);
});

const newBooks = books.map((book) => {
  const newBook = book;
  newBook.title = book.title + 2;
  return newBook;
});
