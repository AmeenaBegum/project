package usercon.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "file")
public class FileStorageProperties {
	 private String uploadDir;
	 private String getnameuser;

	    public String getUploadDir() {
	        return uploadDir;
	    }

	    public void setUploadDir(String uploadDir) {
	        this.uploadDir = uploadDir;
	    }

		public String getGetnameuser() {
			return getnameuser;
		}

		public void setGetnameuser(String getnameuser) {
			this.getnameuser = getnameuser;
		}

}
