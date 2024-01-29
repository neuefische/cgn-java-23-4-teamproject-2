package de.neuefische.team2.backend.models;

import org.springframework.data.annotation.Id;

public record Message(
        @Id
        String id,
        String name,
        String mail,
        String message,
        boolean read
) {
}
