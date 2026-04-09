class Book {
constructor(title, author, year) {
this.title = title;
this.author = author;
this.year = year;
}
get title() {
return this._title;
}
set title(value) {
if (typeof value === 'string' && value.trim() !== '') {
this._title = value;
} else {
throw new Error('Title must be a non-empty string');
}
}
get author() {
return this._author;
}
set author(value) {
if (typeof value === 'string' && value.trim() !== '') {
this._author = value;
} else {
throw new Error('Author must be a non-empty string');
}
}
get year() {
return this._year;
}
set year(value) {
if (Number.isInteger(value) && value > 0) {
this._year = value;
} else {
throw new Error('Year must be a positive integer');
}
}
printInfo() {
console.log(`"${this.title}" by ${this.author}, published in ${this.year}`);
}
static findOldest(books) {
return books.reduce((oldest, book) => book.year < oldest.year ? book : oldest);
}
}

const book1 = new Book("Тіні забутих предків", "Михайло Коцюбинський", 1911);
const book2 = new Book("Кайдашева сім'я", "Іван Нечуй-Левицький", 1879);
const book3 = new Book("Лісова пісня", "Леся Українка", 1911);

book1.printInfo();
book2.printInfo();
book3.printInfo();

try {
    book1.title = 24;
} catch (e) {
    console.log(e.message);
}

try {
    book1.author = "";
} catch (e) {
    console.log(e.message);
}

try {
    book1.year = -2020;
} catch (e) {
    console.log(e.message);
}

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

class EBook extends Book {
constructor(title, author, year, format) {
super(title, author, year);
this.format = format;
}
get format() {
return this._format;
}
set format(value) {
if (typeof value === 'string' && value.trim() !== '') {
this._format = value;
} else {
throw new Error('Format must be a non-empty string');
}
}
printInfo() {
console.log(`"${this.title}" by ${this.author}, published in ${this.year}, format: ${this.format}`);
}
static fromBook(book, format) {
return new EBook(book.title, book.author, book.year, format);
}
}

const ebook1 = new EBook("Кобзар", "Тарас Шевченко", 1840, "PDF");
const ebook2 = new EBook("Енеїда", "Іван Котляревський", 1798, "PDF");

const ebook3 = EBook.fromBook(book1, "PDF");
console.log("\nEBook створений з Book:");
ebook3.printInfo();


const allBooks = [book1, book2, book3, ebook1, ebook2, ebook3];
const oldest = Book.findOldest(allBooks);
console.log("\nНайдавніша книга:");
oldest.printInfo();