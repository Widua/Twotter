package dev.widua.twotteruserservice.service;

import dev.widua.twotteruserservice.model.TwotterUser;
import dev.widua.twotteruserservice.repository.TwotterUserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(SpringExtension.class)
@ExtendWith(MockitoExtension.class)
public class TwotterUserServiceTest {

    @MockitoBean
    private TwotterUserRepository repository;

    @InjectMocks
    private TwotterUserServiceImpl service;

    @Test
    @DisplayName("Finding user by username")
    public void getUserByUsernameAndHeExists(){
        Integer userId = 1;
        String username = "testUser";
        TwotterUser user = new TwotterUser(userId,username,"testPassword","test@email.com");
        when(repository.getTwotterUserByUsername(username)).thenReturn(Optional.of(user));

        TwotterUser resultUser = service.getUserByUsername(username);

        assertNotNull(resultUser,"User exist, so the result should not be null");
        assertEquals(username,resultUser.getUsername(),"User should be exactly the same as he was");
        verify(repository,times(1).description("User should be from repository, not from air")).getTwotterUserByUsername(username);
    }

    @Test
    @DisplayName("Finding user by username, but he not exist")
    public void getUserByUsernameAndHeDoesNotExistThrowsError(){
        String username = "testUser";
        when(repository.getTwotterUserByUsername(username)).thenReturn(Optional.empty());

        assertThrows( UsernameNotFoundException.class, ()->service.getUserByUsername(username), "UserNotFoundException should be throwed" );
        verify(repository,times(1).description("Respository still should be invoked")).getTwotterUserByUsername(username);
    }

    @Test
    @DisplayName("Adding user to the database")
    public void addingUserTest(){
        Integer userId = 1;
        String username = "testUser";
        TwotterUser user = new TwotterUser(userId,username,"testPassword","test@email.com");

        service.addUser(user);

        verify(repository,times(1).description("Repository should be called")).save(user);
    }
}
