package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.Resource;
import java.util.List;

public interface ResourceServiceInterface {
    List<Resource> getAllResources();

    Resource saveResource(Resource resource);
}

