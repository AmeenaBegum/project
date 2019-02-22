package usercon.services;

//import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.stream.Stream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
//import org.springframework.data.domain.Example;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import usercon.exception.HandlerException;
import usercon.exception.MyFileNotFoundException;
import usercon.property.FileStorageProperties;
import usercon.repositories.ImageRepositories;




@Service
public class FileStorageService {
	
	private static final Logger logger = LoggerFactory.getLogger(FileStorageService.class);
	private final Path fileStorageLocation;
	@Autowired
	private ImageRepositories imagerepository;
	
	
    @Autowired
    public FileStorageService(FileStorageProperties fileStorageProperties) {
    	 this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir()).toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
        	logger.error("Could not create the directory where the uploaded files will be stored.");
        }
    }

    public String storeFile(MultipartFile file ,String fileid) throws HandlerException {
        // Normalize file name
        //String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    	logger.info("Testing File Name *****"+fileid);
        try {
            // Check if the file's name contains invalid characters
            if(fileid.contains("..")) {
                throw new HandlerException("Sorry! Filename contains invalid path sequence " + fileid);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileid);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            
        } catch (IOException ex) {
        	throw new HandlerException("Could not store file " + fileid + ". Please try again!");
        	
        }
        return fileid;
    }

    public Resource loadFileAsResource(String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if(resource.exists()) {
                return resource;
            } else {
                throw new MyFileNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new MyFileNotFoundException("File not found " + fileName, ex);
        }
      
    }
    
    public Resource loadFileAsFileId(String fileId) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileId).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if(resource.exists()) 
            {
                return resource;
            } else 
            {
                throw new MyFileNotFoundException("File not found " + fileId);
            }
        } catch (MalformedURLException ex) 
        {
            throw new MyFileNotFoundException("File not found " + fileId, ex);
        }
      
    }
   
    public Stream<Path> loadFiles() {
        try {
            return Files.walk(this.fileStorageLocation, 1)
                .filter(path -> !path.equals(this.fileStorageLocation))
                .map(this.fileStorageLocation::relativize);
        }
        catch (IOException e) {
        	throw new RuntimeException("\"Failed to read stored file");
        }
	}
    
}
