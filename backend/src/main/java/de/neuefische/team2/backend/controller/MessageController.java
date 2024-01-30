package de.neuefische.team2.backend.controller;

import de.neuefische.team2.backend.models.Message;
import de.neuefische.team2.backend.models.MessageDto;
import de.neuefische.team2.backend.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;

    @GetMapping
    public List<Message> getMessages() {
        return messageService.getMessages();
    }

    @DeleteMapping("/{id}")
    public Message deleteMessageById(@PathVariable String id) {
        return messageService.deleteMessageById(id);
    }

    @PostMapping
    public Message addMessage(@RequestBody MessageDto messageDto) {
        return messageService.addMessage(messageDto);
    }
    @PutMapping("/{id}")
    public Message updateMessage( @RequestBody Message message) {
        return messageService.updateMessage(message);
    }
}
