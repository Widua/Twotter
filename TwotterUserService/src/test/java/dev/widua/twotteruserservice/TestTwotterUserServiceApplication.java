package dev.widua.twotteruserservice;

import org.springframework.boot.SpringApplication;

public class TestTwotterUserServiceApplication {

    public static void main(String[] args) {
        SpringApplication.from(TwotterUserServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
    }

}
