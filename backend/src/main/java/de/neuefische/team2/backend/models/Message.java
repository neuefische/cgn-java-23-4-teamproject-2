package de.neuefische.team2.backend.models;

public record Message(
        String id,
        String name,
        String mail,
        String message,
        boolean gelesen
) {
}
