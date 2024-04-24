package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Resource;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
This ResourceRepository interface extends CrudRepository and provides
basic CRUD operations as well as custom queries for deleting resources
and associated resource tags by user ID. The @Modifying annotation
indicates that the queries modify the database, @Transactional ensures
transactional behavior, and @Query defines the custom JPQL queries.
*/

@Repository
public interface ResourceRepository extends CrudRepository<Resource, Integer> {

    // Custom query to delete resources by user ID
    @Modifying
    @Transactional
    @Query("DELETE FROM Resource r WHERE r.user.id = ?1")
    void deleteByUser(int userid);

    // Custom query to delete resource tags from associated resource belonging to specific user ID
    @Modifying
    @Transactional
    @Query("DELETE FROM ResourceTag rt WHERE rt.resource = ANY (SELECT r FROM Resource r WHERE r.user.id = ?1)")
    void deleteResourceTagsByUser(int userid);
}

