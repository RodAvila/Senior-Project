package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Comment;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
This CommentRepository interface extends CrudRepository and provides
basic CRUD operations as well as a custom query to delete comments by user ID.
The @Modifying annotation indicates that the query modifies the database,
@Transactional ensures transactional behavior, and @Query defines the
custom JPQL query.
*/

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {

    // Custom query to delete comments by user ID
    @Modifying
    @Transactional
    @Query("DELETE FROM Comment c WHERE c.user.id = ?1")
    void deleteByUser(int userid);
}


