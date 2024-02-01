package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.models.Book;
import de.neuefische.team2.backend.models.BookDto;
import de.neuefische.team2.backend.models.FavoriteBook;
import de.neuefische.team2.backend.models.FavoriteBookDto;
import de.neuefische.team2.backend.repos.BooksRepo;
import de.neuefische.team2.backend.repos.FavoriteBooksRepo;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


@Service
public class FavoriteBookService {

    private final FavoriteBooksRepo booksRepo;
    private final IdService idService;

    public FavoriteBookService(FavoriteBooksRepo booksRepo, IdService idService) {
        this.booksRepo = booksRepo;
        this.idService= idService;
    }

    public List<FavoriteBook> getBooks() {
        return booksRepo.findAll();
    }

    public FavoriteBook deleteBookById(String id) {

        Optional<FavoriteBook> byId = booksRepo.findById(id);
        if (byId.isPresent()){
          booksRepo.delete(byId.get());
          return byId.get();
        }
        throw (new NoSuchElementException());
    }

    public FavoriteBook addBook(FavoriteBookDto bookDto){

        String id = idService.newId();
        FavoriteBook book = new FavoriteBook(id, bookDto.title(), bookDto.author(),bookDto.img(), bookDto.genre(),
                             bookDto.year(), bookDto.publisher(), bookDto.city(),bookDto.page(),
                             bookDto.description(), bookDto.views());
        return booksRepo.save(book);
    }



/*    public FavoriteBook updateBook(FavoriteBook book) {
        return booksRepo.save(book);
    }

    public FavoriteBook getById(String id){
        Optional<FavoriteBook> byId = booksRepo.findById(id);
        if (byId.isPresent()){
            Integer views = byId.get().views();
            views=views+1;
            FavoriteBook book = byId.get().withViews(views);
            booksRepo.save(book);
            return book;
        }
        throw(new ResponseStatusException(HttpStatus.NOT_FOUND, "No book with such id!"));
    }*/

}
