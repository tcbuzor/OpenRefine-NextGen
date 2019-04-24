package com.google.openrefine.config.apidoc;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket api() {

        Contact contact = new Contact(
                "Thad Guidry",
                "http://openrefine.org",
                "thad@openrefine.org"
        );

        List<VendorExtension> vendorExtensions = new ArrayList<>();

        ApiInfo apiInfo = new ApiInfo(
                "OpenRefine REST API",
                "OpenRefine REST API with Endpoint Validation", "1.0",
                "https://github.com/OpenRefine/OpenRefine/blob/master/LICENSE.txt", contact,
                "BSD", "https://github.com/OpenRefine/OpenRefine/blob/master/LICENSE.txt",vendorExtensions);

        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.google.openrefine.web.rest"))
                .paths(PathSelectors.any())
                .build();
    }


}
