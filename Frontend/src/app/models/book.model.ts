import { Author } from "./author.model";
import { LiteraryGenre } from "./LiteraryGenre.model";

export interface Book {
    id: number;
    bookName: string;
    author: Author;
    literaryGenre: LiteraryGenre;
    urlImage?: string;
    price: number;
    description?: string;
    stock: number;
}

export interface BookCreateDTO {
    bookName: string;
    authorId: number;
    literaryGenreId: number;
    urlImage?: string;
    price: number;
    description?: string;
    stock: number;
}

export interface BookUpdateDTO {
    bookName?: string;
    authorId?: number;
    literaryGenreId?: number;
    urlImage?: string;
    price?: number;
    description?: string;
    stock?: number;
}