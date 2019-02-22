package usercon.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import usercon.documents.ImageModel;
import usercon.repositories.ImageRepositories;

@Service
public class ImageService {
	MongoTemplate mongoTemplate;

	@Autowired
	private ImageRepositories imageRepository;
	public void insert(ImageModel imageModel) {
		imageRepository.insert(imageModel);
	}
	public List<ImageModel> getAll() {
		
		 return imageRepository.findAll();
		
		}
	
	
	}
