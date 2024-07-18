export function getUniqueCategories(books:any) {
    const categories = books.map((book: any) => book.category);
    return Array.from(new Set(categories));
  }
  