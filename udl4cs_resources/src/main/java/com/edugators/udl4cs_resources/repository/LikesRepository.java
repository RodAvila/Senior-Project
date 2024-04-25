package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Likes;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
This LikesRepository interface extends CrudRepository and provides
basic CRUD operations as well as custom queries for finding a like
by resource ID and user ID, and for deleting likes by user ID. The
@Query annotations define the JPQL queries, while @Modifying and
@Transactional ensure proper transaction management for the delete
operation.
*/

@Repository
public interface LikesRepository extends CrudRepository<Likes, Integer> {

    // Custom query to find a like by resource ID and user ID
    @Query("select l from Likes l where l.resource.id = ?1 and l.user.id = ?2")
    Likes findByUserAndResource(int resourceid, int userid);

    // Custom query to delete likes by user ID
    @Modifying
    @Transactional
    @Query("DELETE FROM Likes l WHERE l.user.id = ?1")
    void deleteByUser(int userid);
}

