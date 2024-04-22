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

@Repository
public interface ResourceTagRepository extends CrudRepository<ResourceTag, Integer> {
    @Modifying
    @Transactional
    @Query("DELETE FROM ResourceTag rt WHERE rt.resource.id = ?1")
    void deleteByResource(int resourceid);
}