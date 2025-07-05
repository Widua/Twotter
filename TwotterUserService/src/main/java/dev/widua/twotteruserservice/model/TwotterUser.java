package dev.widua.twotteruserservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class TwotterUser {
    @Id
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
