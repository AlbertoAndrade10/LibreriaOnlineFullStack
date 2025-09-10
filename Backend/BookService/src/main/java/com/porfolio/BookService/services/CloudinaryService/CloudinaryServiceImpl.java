package com.porfolio.BookService.services.CloudinaryService;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Service
public class CloudinaryServiceImpl implements ICloudinaryService {

    @Autowired
    private Cloudinary cloudinary;

    @SuppressWarnings("rawtypes")
    @Override
    public String uploadImage(MultipartFile file) throws IOException {
        File uploadedFile = convertMultiPartToFile(file);

        Map uploadResult = cloudinary.uploader().upload(uploadedFile, ObjectUtils.emptyMap());

        uploadedFile.delete(); //-->> delete temporary file 

        return uploadResult.get("secure_url").toString();
    }

    @SuppressWarnings("rawtypes")
    @Override
    public String uploadImageWithPublicId(MultipartFile file, String publicId) throws IOException {
        File uploadedFile = convertMultiPartToFile(file);

        Map uploadResult = cloudinary.uploader().upload(uploadedFile,
                ObjectUtils.asMap("public_id", publicId));

        uploadedFile.delete(); //-->> delete temporary file 

        return uploadResult.get("secure_url").toString();
    }

    @Override
    public void deleteImage(String publicId) throws IOException {
        cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
    }

    @Override
    public String generatePublicId(String originalFilename) {
        String extension = originalFilename.substring(originalFilename.lastIndexOf("."));

        return "books/" + UUID.randomUUID().toString() + extension;
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {

        File convFile = new File(file.getOriginalFilename());

        try (FileOutputStream fos = new FileOutputStream(convFile)) {
            fos.write(file.getBytes());
        }

        return convFile;
    }

}
