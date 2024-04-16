package com.edugators.udl4cs_resources.repository;
import com.edugators.udl4cs_resources.model.Resource;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepository extends CrudRepository<Resource, Integer> {
    @Modifying
    @Transactional
    @Query("DELETE FROM Resource r WHERE r.user.id = ?1")
    void deleteByUser(int userid);

    @Modifying
    @Transactional
    @Query("DELETE FROM ResourceTag rt WHERE rt.resource = ANY (SELECT r FROM Resource r WHERE r.user.id = ?1)")
    void deleteResourceTagsByUser(int userid);
}
