package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Likes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikesRepository extends CrudRepository<Likes, Integer> {
    @Query("select l from Likes l where l.resource.id = ?1 and l.user.id = ?2")
    Likes findByUserAndResource(int resourceid, int userid);
}