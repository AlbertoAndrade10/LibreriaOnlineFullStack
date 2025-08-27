export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    coverImage: string;
    rating: number;
    genre: string;
    publicationYear: number;
    pages: number;
    isbn: string;
}

export interface Genre {
    id: number;
    name: string;
    bookCount: number;
}