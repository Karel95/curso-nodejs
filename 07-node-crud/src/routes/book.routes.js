const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();

//MIDDLEWARE:
const getBook = async(req, res, next) => {
    let book;
    const bookId = req.params;
    if (!bookId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({ message: 'El ID del libro no es valido.' });
    }
    try {
        book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.book = book;
    next();
}

//.get() Obtener todos los libros:
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        console.log('GET ALL', books)
        if (books.length === 0) {
            return res.status(204).json([]);
        }
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//.post() Crear un nuevo libro:
router.post('/', async (req, res) => {
    const {title, author, publicationYear, genre, pages, price} = req?.body;
    if (!title || !author || !publicationYear || !genre || !pages || !price) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publicationYear: req.body.publicationYear,
        genre: req.body.genre,
        pages: req.body.pages,
        price: req.body.price,
    });

    try {
        const newBook = await book.save();
        console.log('POST', newBook)
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

