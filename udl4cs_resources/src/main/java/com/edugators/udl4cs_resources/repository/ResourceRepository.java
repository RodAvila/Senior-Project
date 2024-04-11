package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Resource;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepository extends CrudRepository<Resource, Integer> {

    List<Resource> findResourcesByTagsId(int id);

    List<Resource> findResourcesByTagsName(String name);
}
