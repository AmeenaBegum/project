package usercon.repositories;

import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import usercon.documents.ImageModel;


@Repository("imageRepository")
public interface ImageRepositories extends MongoRepository<ImageModel, UUID> {

}
