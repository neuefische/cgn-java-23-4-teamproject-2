package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.models.Book;
import de.neuefische.team2.backend.repos.BooksRepo;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;


@Service
public class BookService {
    private final BooksRepo booksRepo;

    public BookService(BooksRepo booksRepo) {
        this.booksRepo = booksRepo;
    }

    public List<Book> getBooks() {
        return booksRepo.findAll();
    }

    public Book updateBook(Book book) {
        return booksRepo.save(book);
    }
    public Book getById(String id){return booksRepo.findById(id).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "No book with such id!"));
    }

    public Book deleteBookById(String id) {
        Book bookToDelete = getById(id);
        booksRepo.delete(bookToDelete);
        return bookToDelete;
    }
}
