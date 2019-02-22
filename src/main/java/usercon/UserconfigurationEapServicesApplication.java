package usercon;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import usercon.property.FileStorageProperties;

@SpringBootApplication
@EnableConfigurationProperties({
    FileStorageProperties.class
})
public class UserconfigurationEapServicesApplication {
	private static final Logger logger = (Logger) LoggerFactory.getLogger(UserconfigurationEapServicesApplication.class);


	public static void main(String[] args) {
		SpringApplication.run(UserconfigurationEapServicesApplication.class, args);
		
		logger.info("--Userconfiguration_EAP_Services Started--");
	}
}
