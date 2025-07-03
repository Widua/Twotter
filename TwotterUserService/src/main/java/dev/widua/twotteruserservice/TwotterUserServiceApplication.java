package dev.widua.twotteruserservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TwotterUserServiceApplication {

    public static void main(String[] args) {
        System.out.println(System.getenv("POSTGRES_PASSWORD"));
        SpringApplication.run(TwotterUserServiceApplication.class, args);
    }

}
