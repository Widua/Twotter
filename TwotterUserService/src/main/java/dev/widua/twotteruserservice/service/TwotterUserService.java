package dev.widua.twotteruserservice.service;

import dev.widua.twotteruserservice.model.TwotterUser;

public interface TwotterUserService {
    void addUser(TwotterUser user);
    TwotterUser getUserByUsername(String username);
}
