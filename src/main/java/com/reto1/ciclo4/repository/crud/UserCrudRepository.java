package com.reto1.ciclo4.repository.crud;

import com.reto1.ciclo4.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserCrudRepository extends CrudRepository<User, Integer> {
  
    Boolean findByemail(String email);
}
