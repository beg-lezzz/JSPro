"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
Если книга с таким названием уже существует в списке, выбросьте ошибку с
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в
библиотеке и возвращать true или false в зависимости от того, есть ли такая
книга в списке или нет.
*/

class Service {
  checkBooksDuplicate(bookList){
    return bookList.length === new Set(bookList).size
  }
}

class Library {
  #book = [];
  #service = new Service();

  constructor(bookList) {
    if (this.#service.checkBooksDuplicate(bookList)) {
      this.#book = bookList
    } else throw new Error("В списке книг встречаются дубликаты")
  }

  get allBooks() {
    return this.#book;
  }

  addBook(bookTitle) {
    if (!this.#book.includes(bookTitle)) {
      this.#book.push(bookTitle)
    } else throw new Error(`Книга ${bookTitle} уже есть в библиотеке.`)
  }

  removeBook(bookTitle) {
    const findIndex = this.#book.indexOf(bookTitle);
      if (findIndex > -1) {
        this.#book.splice(findIndex, 1)
      } else throw new Error(`Книга ${bookTitle} отсутствует в библиотеке.`)
  }

  hasBook(title) {
    return this.#book.includes(title);
  }
}

const books = [
  "Тихий Дон",
  "Архипелаг Гулаг",
  "Война и мир",
  "Мертвые души",
  "Мастер и Маргарита"
]

const lib = new Library(books);
console.log(lib.allBooks.join("\n"));
console.log("---")
lib.addBook("Преступление и наказание")
console.log(lib.allBooks.join("\n"));
console.log("---")
console.log(lib.hasBook("Преступление и наказание"))
console.log("---")
lib.removeBook("Преступление и наказание")
console.log(lib.allBooks.join("\n"));
console.log("---")
console.log(lib.hasBook("Преступление и наказание"))
console.log("---")
lib.addBook("Преступление и наказание")
console.log(lib.allBooks.join("\n"));
console.log("---")
lib.addBook("Преступление и наказание")
console.log(lib.allBooks.join("\n"));
