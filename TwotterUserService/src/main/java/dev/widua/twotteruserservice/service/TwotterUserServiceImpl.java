package dev.widua.twotteruserservice.service;

import dev.widua.twotteruserservice.model.TwotterUser;
import dev.widua.twotteruserservice.repository.TwotterUserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class TwotterUserServiceImpl implements TwotterUserService{

    private TwotterUserRepository repository;

    public TwotterUserServiceImpl(TwotterUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void addUser(TwotterUser user) {
        repository.save(user);
    }

    @Override
    public TwotterUser getUserByUsername(String username) {
       return repository.getTwotterUserByUsername(username).orElseThrow(()->new UsernameNotFoundException(String.format("User with username %s does not exists",username)));
    }
}
