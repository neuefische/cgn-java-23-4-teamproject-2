package de.neuefische.team2.backend.service;


import de.neuefische.team2.backend.models.User;

import de.neuefische.team2.backend.repos.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {
    private final UserRepo userRepo;


    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User getUserById(String id) {
        Optional<User> byId = userRepo.findById(id);
        if (byId.isPresent()) {
            return new User(byId.get().id(), byId.get().mail(), byId.get().favorites());
        }
        throw (new ResponseStatusException(HttpStatus.NOT_FOUND, "No user with such id!"));
    }


    public User updateStatus(String userId, String bookId) {
        Optional<User> optionalUser = userRepo.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            List<String> updatedFavorites = new ArrayList<>(user.favorites());
            if (updatedFavorites.contains(bookId)) {
                updatedFavorites.remove(bookId);
            } else {
                updatedFavorites.add(bookId);
            }
            User updatedUser = user.withFavorites(updatedFavorites);
            userRepo.save(updatedUser);
            return updatedUser;
        }
        throw (new ResponseStatusException(HttpStatus.NOT_FOUND, "No user with such id!"));
    }
}
