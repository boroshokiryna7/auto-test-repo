class Book {
constructor(title, author, year) {
this.title = title;
this.author = author;
this.year = year;
}
printInfo() {
console.log(`"${this.title}" by ${this.author}, published in ${this.year}`);
}
}

const book1 = new Book("Тіні забутих предків", "Михайло Коцюбинський", 1911);
const book2 = new Book("Кайдашева сім'я", "Іван Нечуй-Левицький", 1879);
const book3 = new Book("Лісова пісня", "Леся Українка", 1911);

book1.printInfo();
book2.printInfo();
book3.printInfo();
