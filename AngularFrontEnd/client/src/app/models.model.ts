export interface Book {
  id: number;
  name: string;
  author: string;
  description: string;
  value: number;
  publishDate: string;
  categoryId: number;
  category: Category;
}

export interface Category {
  id: number;
  books: Array<Book>;
  name: string;
}
