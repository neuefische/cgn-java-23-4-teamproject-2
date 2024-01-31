package de.neuefische.team2.backend.controller;

import de.neuefische.team2.backend.models.Message;
import de.neuefische.team2.backend.models.MessageDtoPost;
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
    public Message addMessage(@RequestBody MessageDtoPost messageDtoPost) {
        return messageService.addMessage(messageDtoPost);
    }

    @PostMapping("/{id}/update")
    public Message updateMessage(@PathVariable String id) {
        return messageService.updateStatus(id);
    }
}
