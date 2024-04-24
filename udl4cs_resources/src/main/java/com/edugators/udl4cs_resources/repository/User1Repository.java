package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.User1;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

/*
This User1Repository interface extends CrudRepository and provides
basic CRUD operations as well as a custom query to find a user by their
username. The @Query annotation defines the JPQL query, which selects a
user entity (User1) based on the provided username parameter.
*/

@Repository
public interface User1Repository extends CrudRepository<User1,Integer> {

    // Custom query to find a user by username
    @Query("SELECT u FROM User1 u WHERE u.userName = ?1")
    User1 findByUsername(String userName);
}

