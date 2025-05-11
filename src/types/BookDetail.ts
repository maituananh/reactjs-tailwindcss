import { BookPdf } from "./BookPdf";

export interface BookDetail {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: number;
  price: string;
  publisher: string;
  rating: number;
  subtitle: string;
  title: string;
  url: string;
  year: number;
  pdf: BookPdf;
}
