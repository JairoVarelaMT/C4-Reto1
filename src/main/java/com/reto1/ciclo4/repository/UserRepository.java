package com.reto1.ciclo4.repository;

import java.util.List;
import java.util.Optional;

import com.reto1.ciclo4.model.User;
import com.reto1.ciclo4.repository.crud.UserCrudRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    @Autowired
    private UserCrudRepository usercrudrepository;

//metogo get todos los usuarios
    public List<User> getAll(){
        return (List<User>)usercrudrepository.findAll();
    }
//metodo pust user
    public User save(User usuario){
        return usercrudrepository.save(usuario);
    }
    //metodo llmar por id 
    public Boolean findByEmail(String email) {
        Optional<User> usuario = usercrudrepository.findByEmail(email);
        return !usuario.isEmpty();
    }
    public Optional<User> findByEmailAndPassword(String email , String password ){
        return usercrudrepository.findByEmailAndPassword(email, password);
    }
}
