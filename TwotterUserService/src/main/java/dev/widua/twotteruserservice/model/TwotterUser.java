package dev.widua.twotteruserservice.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TwotterUser {
    private Integer id;
    private String username;
    private String password;
    private String email;

    public TwotterUser(Integer id, String username, String password, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public TwotterUser() {
    }
}
