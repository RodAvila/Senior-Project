package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.ResourceTag;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
This ResourceTagRepository interface extends CrudRepository and provides
basic CRUD operations as well as a custom query for deleting resource tags
by resource ID. The @Modifying annotation indicates that the query
modifies the database, @Transactional ensures transactional behavior,
and @Query defines the custom JPQL query.
*/

@Repository
public interface ResourceTagRepository extends CrudRepository<ResourceTag, Integer> {

    // Custom query to delete resource tags by resource ID
    @Modifying
    @Transactional
    @Query("DELETE FROM ResourceTag rt WHERE rt.resource.id = ?1")
    void deleteByResource(int resourceid);
}
