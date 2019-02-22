package usercon.documents;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="Deploy_Images")
public class Image
{
	@Id
	private UUID imageId;
	private String fileName;
	private String imagePath;
	private String fileId;
	private String productName;
	private String productType;
	
	public String getFileId() {
		return fileId;
	}
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}
	public UUID getImageId() {
		return imageId;
	}
	public void setImageId(UUID imageId) {
		this.imageId = imageId;
	}
	public String getFileName() {
		return fileName;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	


}
