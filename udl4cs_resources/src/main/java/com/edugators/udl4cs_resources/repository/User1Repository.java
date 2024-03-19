package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.User1;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface User1Repository extends CrudRepository<User1,Integer> {

}
