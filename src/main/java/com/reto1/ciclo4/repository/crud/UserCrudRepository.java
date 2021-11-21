package com.reto1.ciclo4.repository.crud;

import java.util.Optional;
import com.reto1.ciclo4.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserCrudRepository extends CrudRepository<User, Integer> {
  
    Optional<User> findByemail(String email);
}
