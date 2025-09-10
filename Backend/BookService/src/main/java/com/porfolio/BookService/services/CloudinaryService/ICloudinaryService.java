package com.porfolio.BookService.services.CloudinaryService;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface ICloudinaryService {

    public String uploadImage(MultipartFile file) throws IOException;

    public String uploadImageWithPublicId(MultipartFile file, String publicId) throws IOException;

    public void deleteImage(String publicId) throws IOException;

    public String generatePublicId(String originalFilename);
}
