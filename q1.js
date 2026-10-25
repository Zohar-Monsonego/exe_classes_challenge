class MediaItem {
  constructor(title_, year_, genre_) {
    this.title = title_;
    this.year = year_;
    this.genre = genre_;
  }

  getSummery() {
    return (
      "title: " + this.year + "year: " + this.year + "genre: " + this.genre
    );
  }
}

class Book extends MediaItem {
  constructor(title_, year_, genre_, author_, pageCount_) {
    super(title_, year_, genre_);
    this.author = author_;
    this.pageCount = pageCount_;
  }

  getSummery() {
    return "Book: " + this.title + "by " + this.author + ", " + this.pageCount;
  }
}

class Movie extends MediaItem {
  constructor(title_, year_, genre_, director_, durationMinutes_) {
    super(title_, year_, genre_);
    this.director = director_;
    this.durationMinutes = durationMinutes_;
  }

  getSummery() {
    return (
      "Movie: " +
      this.title +
      "directed by: " +
      this.director +
      ", " +
      this.durationMinutes
    );
  }
}

class Library {
  constructor() {
    this.media_items = [];
  }

  addItem(item) {
    this.media_items.push(item);
  }

  search(term) {
    return this.media_items.filter((item) => {
      return item.title.toLowerCase().includes(term.toLowerCase());
    });
  }

  listByGenre(genre) {
    return this.media_items.filter((item) => {
      return item.genre.includes(genre);
    });
  }

  getItems() {
    return this.media_items;
  }
}

const lib = new Library();
lib.addItem(new Book("Dune", 1965, "Sci-Fi", "Frank Herbert", 412));
console.log(lib.getItems());

lib.addItem(new Movie("Dune", 2021, "Sci-Fi", "Denis Villeneuve", 155));
console.log(lib.getItems());

console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci-Fi"));
