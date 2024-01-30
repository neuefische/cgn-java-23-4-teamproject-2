package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.models.Book;
import de.neuefische.team2.backend.models.Message;
import de.neuefische.team2.backend.models.MessageDto;
import de.neuefische.team2.backend.repos.MessageRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service

public class MessageService {
    private final MessageRepo messageRepo;
    private final IdService idService;

    public MessageService(MessageRepo messageRepo, IdService idService) {
        this.messageRepo = messageRepo;
        this.idService = idService;
    }

    public List<Message> getMessages() {
        return messageRepo.findAll();
    }

    public Message deleteMessageById(String id) {
        Optional<Message> byId = messageRepo.findById(id);
        if (byId.isPresent()) {
            messageRepo.delete(byId.get());
            return byId.get();
        }
        throw (new NoSuchElementException());
    }
    public Message updateMessage(Message message) {
        return messageRepo.save(message);
    }
    public Message addMessage(MessageDto messageDto) {
        String id = idService.newId();
        Message messageNew = new Message(id, messageDto.name(), messageDto.mail(), messageDto.message(), false);
        return messageRepo.save(messageNew);
    }

}