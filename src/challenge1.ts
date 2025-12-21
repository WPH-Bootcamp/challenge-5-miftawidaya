/**
 * Represents a book with its metadata (title, author, publication year).
 */
type Book = {
  title: string;
  author: string;
  year: number;
};

/**
 * Collection of books stored in memory.
 */
const books: Book[] = [];

/**
 * Adds a new book to the collection and logs a confirmation message.
 *
 * @param title - The title of the book.
 * @param author - The author of the book.
 * @param year - The publication year.
 */
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);

  console.log(`Book added: "${title}" by ${author} (${year})`);
}

/**
 * Logs all books in the collection to the console.
 */
function listBooks(): void {
  console.log('All Books:');
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

/**
 * Searches for books whose title contains the given keyword.
 * Uses case-sensitive substring matching.
 *
 * @param title - (Optional) The title or keyword to search for.
 */
function searchBook(title?: string): void {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

  const foundBooks = books.filter((book) => book.title.includes(title));

  if (foundBooks.length === 0) {
    console.log(`No books found with title containing "${title}".`);
  } else {
    console.log(`Search Results for "${title}":`);
    foundBooks.forEach((book) => {
      console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
