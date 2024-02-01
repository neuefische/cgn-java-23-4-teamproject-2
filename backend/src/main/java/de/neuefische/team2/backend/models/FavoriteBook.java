package de.neuefische.team2.backend.models;

import lombok.With;
import org.springframework.data.annotation.Id;

@With
public record FavoriteBook(
        @Id
        String id,
        String title,
        String author,
        String img,
        String genre,
        Integer year,
        String publisher,
        String city,
        Integer page,
        String description,
        Integer views
) {
}
