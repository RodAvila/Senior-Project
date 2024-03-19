package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<Users,Integer> {

}
