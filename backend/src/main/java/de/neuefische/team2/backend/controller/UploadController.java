package de.neuefische.team2.backend.controller;

import de.neuefische.team2.backend.service.CloudinaryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("api/books/")
@AllArgsConstructor
public class UploadController {
    private final CloudinaryService cloudinaryService;

    @PostMapping("/img")
    @ResponseStatus(HttpStatus.CREATED)
    public String uploadImage(@RequestPart(name="file")MultipartFile file) throws IOException{
        return cloudinaryService.uploadFile(file);
    }
}
