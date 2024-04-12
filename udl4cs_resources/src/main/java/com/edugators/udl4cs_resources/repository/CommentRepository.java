package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Comment;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {
    @Modifying
    @Transactional
    @Query("DELETE FROM Comment c WHERE c.user.id = ?1")
    void deleteByUser(int userid);
}

