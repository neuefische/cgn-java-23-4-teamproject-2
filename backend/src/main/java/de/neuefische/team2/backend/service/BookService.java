package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.models.Book;
import de.neuefische.team2.backend.models.BookDto;
import de.neuefische.team2.backend.repos.BooksRepo;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


@Service
public class BookService {

    private final BooksRepo booksRepo;
    private final IdService idService;

    public BookService(BooksRepo booksRepo, IdService idService) {
        this.booksRepo = booksRepo;
        this.idService= idService;
    }

    public List<Book> getBooks() {
        return booksRepo.findAll();
    }

    public Book updateBook(Book book) {
        return booksRepo.save(book);
    }

    public Book getById(String id){
        Optional<Book> byId = booksRepo.findById(id);
        if (byId.isPresent()){
            Integer views = byId.get().views();
             views=views+1;
            Book book = byId.get().withViews(views);
            booksRepo.save(book);
            return book;
        }
         throw(new ResponseStatusException(HttpStatus.NOT_FOUND, "No book with such id!"));
    }

    public Book deleteBookById(String id) {

        Optional<Book> byId = booksRepo.findById(id);
        if (byId.isPresent()){
          booksRepo.delete(byId.get());
          return byId.get();
        }
        throw (new NoSuchElementException());
    }

    public Book addBook(BookDto bookDto){

        String id = idService.newId();
        Book book = new Book(id, bookDto.title(), bookDto.author(),bookDto.img(), bookDto.genre(),
                             bookDto.year(), bookDto.publisher(), bookDto.city(),bookDto.page(),
                             bookDto.description(), bookDto.views());
        return booksRepo.save(book);
    }


}
