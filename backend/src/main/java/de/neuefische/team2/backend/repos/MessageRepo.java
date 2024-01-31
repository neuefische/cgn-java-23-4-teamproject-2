package de.neuefische.team2.backend.repos;

import de.neuefische.team2.backend.models.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepo extends MongoRepository<Message, String> {
}
