package dev.widua.twotterpostingservice;

import org.springframework.boot.SpringApplication;

public class TestTwotterPostingServiceApplication {

    public static void main(String[] args) {
        SpringApplication.from(TwotterPostingServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
    }

}
