package de.neuefische.team2.backend.models;

import java.util.List;

public record UserDto(
        List<String> favorites
) {
}
