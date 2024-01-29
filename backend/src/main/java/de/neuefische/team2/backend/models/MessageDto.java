package de.neuefische.team2.backend.models;

public record MessageDto(
        String name,
        String mail,
        String message,
        boolean read
) {
}
