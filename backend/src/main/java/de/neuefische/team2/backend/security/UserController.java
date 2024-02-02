package de.neuefische.team2.backend.security;

import de.neuefische.team2.backend.models.User;
import de.neuefische.team2.backend.repos.UserRepo;
import de.neuefische.team2.backend.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")
public class UserController {
    UserService userService;

    @GetMapping("/me")
    public String getMe() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth instanceof OAuth2AuthenticationToken token) {
            return token.getPrincipal().getAttributes().get("login").toString();
        }

        return auth.getName();
    }


    @PostMapping("/me")
    public User updateFavorite(@RequestBody String bookId) {
        return userService.updateStatus(SecurityContextHolder.getContext().getAuthentication().getName(), bookId);
    }
}