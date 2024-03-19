package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.user1s;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface user1Repository extends CrudRepository<user1s,Integer> {

}
