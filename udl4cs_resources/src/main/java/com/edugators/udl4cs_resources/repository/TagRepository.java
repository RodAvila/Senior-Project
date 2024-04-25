package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Tag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
This TagRepository interface extends CrudRepository and provides basic
CRUD operations for managing Tag entities. It inherits methods for saving,
updating, deleting, and querying Tag objects from the CrudRepository interface.
*/

@Repository
public interface TagRepository extends CrudRepository<Tag, Integer> {

}
