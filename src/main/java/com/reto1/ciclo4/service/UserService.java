package com.reto1.ciclo4.service;

import java.util.List;
import java.util.Optional;

import com.reto1.ciclo4.model.User;
import com.reto1.ciclo4.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userrepository;
//metodo traer todos los usuarios
    public List<User>getAll(){
        return userrepository.getAll();
    }
//guardar 1 usuario
    public User save(User cliente){
        return userrepository.save(cliente);                         
    }
    public Boolean findByEmail(String correo){
        return userrepository.findByEmail(correo);
    }
}
