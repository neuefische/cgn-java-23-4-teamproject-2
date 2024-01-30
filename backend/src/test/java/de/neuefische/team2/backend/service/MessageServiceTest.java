package de.neuefische.team2.backend.service;

import de.neuefische.team2.backend.models.Book;
import de.neuefische.team2.backend.models.BookDto;
import de.neuefische.team2.backend.models.Message;
import de.neuefische.team2.backend.models.MessageDto;
import de.neuefische.team2.backend.repos.MessageRepo;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class MessageServiceTest {
    MessageRepo messageRepo = Mockito.mock(MessageRepo.class);
    IdService idService = Mockito.mock(IdService.class);

    @Test
    void getMessagesTest_returnListOfAllMessages() {
        //GIVEN
        Mockito.when(messageRepo.findAll()).thenReturn(List.of(
                new Message("1", "Name", "Mail", "Message", false),
                new Message("2", "Name2", "Mail2", "Message2", true)
        ));
        MessageService messageService = new MessageService(messageRepo, idService);
        //WHEN
        List<Message> actual = messageService.getMessages();
        //THEN
        assertEquals(List.of(new Message("1", "Name", "Mail", "Message", false),
                new Message("2", "Name2", "Mail2", "Message2", true)
        ), actual);
        Mockito.verify(messageRepo, Mockito.times(1)).findAll();
        Mockito.verifyNoMoreInteractions(messageRepo);
    }

    @Test
    void deleteMessageById() {
        //GIVEN
        Mockito.when(messageRepo.findById(Mockito.any())).thenReturn(
                Optional.of(new Message("1", "Name", "Mail", "Message", false)
                ));

        MessageService messageService = new MessageService(messageRepo, idService);

        //WHEN
        Message actual = messageService.deleteMessageById("1");

        //THEN
        assertEquals(
                new Message("1", "Name", "Mail", "Message", false)
                , actual);

        Mockito.verify(messageRepo, Mockito.times(1)).findById(Mockito.any());
        Mockito.verify(messageRepo, Mockito.times(1)).delete(Mockito.any());
        Mockito.verifyNoMoreInteractions(messageRepo);

    }

    @Test
    void addMessageTest_returnMessage() {
        MessageDto messageDto = new MessageDto( "Name", "Mail", "Message", false);

        Message message = new Message("3", "Name", "Mail", "Message", false);


        // GIVEN
        Mockito.when(messageRepo.save(message)).thenReturn(message);
        Mockito.when(idService.newId()).thenReturn("3");

        MessageService messageService = new MessageService(messageRepo, idService);


        // WHEN
        Message actual = messageService.addMessage(messageDto);

        // THEN
        Mockito.verify(messageRepo).save(message);
        Mockito.verify(idService).newId();

        Message expected = new Message("3", "Name", "Mail", "Message", false);
        assertEquals(expected, actual);
    }
    @Test
    void updateMessageTest_returnMessage_whenMessageWithUpdatedSent() {
        //GIVEN

        Message udpatedMessage =   new Message("1", "TestName", "mail", "TestMessage", true);

        Mockito.when(messageRepo.save(Mockito.any())).thenReturn(udpatedMessage);

        MessageService messageService = new MessageService(messageRepo,idService);

        //WHEN
        Message actual = messageService.updateMessage(udpatedMessage);

        //THEN
        assertEquals(udpatedMessage, actual);

        Mockito.verify(messageRepo, Mockito.times(1)).save(udpatedMessage);
        Mockito.verifyNoMoreInteractions(messageRepo);
    }
}