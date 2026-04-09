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

class EBook extends Book {
constructor(title, author, year, format) {
super(title, author, year);
this.format = format;
}
printInfo() {
console.log(`"${this.title}" by ${this.author}, published in ${this.year}, format: ${this.format}`);
 }
}

const ebook1 = new EBook("Кобзар", "Тарас Шевченко", 1840, "PDF");
ebook1.printInfo();
