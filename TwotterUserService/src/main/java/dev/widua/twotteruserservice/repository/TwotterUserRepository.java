package dev.widua.twotteruserservice.repository;

import dev.widua.twotteruserservice.model.TwotterUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TwotterUserRepository extends CrudRepository<TwotterUser,Integer> {
    Optional<TwotterUser> getTwotterUserByUsername(String username);
}
