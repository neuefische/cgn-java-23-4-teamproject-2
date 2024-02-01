package de.neuefische.team2.backend.models;


public record FavoriteBookDto(

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
        )
{
}
