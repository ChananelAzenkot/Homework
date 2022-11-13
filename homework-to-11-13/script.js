class User {
    #borrowedBooks = [];
    constructor(first, last, city) {
        this.first = first;
        this.last = last;
        this.city = city;
    }
    borrow(book) {
        if (!book.canBorrow) {return;}
        this.#borrowedBooks.push(book);
    }

    isBorrowed(book) {
        return this.#borrowedBooks.includes(book);
    }

    getBorrowedBooks() {
        return this.#borrowedBooks.map(x => x);
    }
}

let user1 = new User("chananel", "azenkot", "Tel Aviv");
let user2 = new User('ori', 'tov', 'acoo');
let user3 = new User('edan', 'soum', ' tviria ');


class Book {
    constructor(title, author, canBorrow) {
        this.title = title;
        this.author = author;
        this.canBorrow = canBorrow ? true : false;
    }
}

let book = new Book('Tom Sawyer', 'Mark Twain', 'abcd', '',true);
let book2 = new Book('Encyclopedia Britannica', '', false);
let book3 = new Book('Harry Potter and the Philosopher\'s Stone', ' J. K. Rowling', true);
let book4 = new Book('Oxford Dictionary of the English Language', '', false);
let book5 = new Book('Adventures of Sherlock Holmes', 'Arthur Conan Doyle', true);

user1.borrow(book);
user1.borrow(book2);
user1.borrow(book3);
user1.borrow(book4);
user2.borrow(book);
user2.borrow(book3);

user1.getBorrowedBooks().push(book2);

class BookReport {
    #users = [];
    constructor(name) {
        this.name = name;
    }
    addNewUser(user) {
        this.#users.push(user);
    }
    printReport() {
        this.#users.forEach(user => {
            console.log(
`${user.first} ${user.last} from ${user.city} borrowed the following books:
${user.getBorrowedBooks().map(book => `  ${book.title}`).join('\n')}`
            );
        });
    }

    isBorrowed(bookToCheck) {
        return this.#users.some(user => user.isBorrowed(bookToCheck));
    }
}
let a = new BookReport("report1");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);

console.log(a);
a.printReport();

console.log(a.isBorrowed(book));
console.log(a.isBorrowed(book2));
console.log(a.isBorrowed(book5));