package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.User1;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface User1Repository extends CrudRepository<User1,Integer> {
    @Query("SELECT u FROM User1 u WHERE u.userName = ?1")
    User1 findByUsername(String userName);
}
