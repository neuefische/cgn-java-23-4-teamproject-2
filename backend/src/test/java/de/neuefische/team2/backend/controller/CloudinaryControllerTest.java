package de.neuefische.team2.backend.controller;
import com.cloudinary.Cloudinary;
import com.cloudinary.Uploader;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MvcResult;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@SpringBootTest
@AutoConfigureMockMvc
public class CloudinaryControllerTest {
    @Autowired
    private MockMvc mvc;
    @MockBean
    private Cloudinary cloudinary;
private Uploader uploader = mock(Uploader.class);

    @Test
    void updateFile_whenFile_thenUrl() throws Exception {
        //GIVEN
        Map map =new HashMap();
        MockMultipartFile file = new MockMultipartFile(
                "file", "Datei.jpg", MediaType.IMAGE_JPEG_VALUE, "Hello, World!".getBytes());
Mockito.when(cloudinary.uploader()).thenReturn(uploader);
map.put("secure_url", "url");
Mockito.when(uploader.upload(any(),any())).thenReturn(map);


        //WHEN
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.multipart("/api/books/img")
                        .file(file)
                        .contentType(MediaType.MULTIPART_FORM_DATA)
                )

        //THEN
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(content().string("url"))
                .andReturn();

        assertEquals(201, mvcResult.getResponse().getStatus() );
    }
}
