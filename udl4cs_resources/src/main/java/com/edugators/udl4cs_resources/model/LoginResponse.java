package com.edugators.udl4cs_resources.model;

public class LoginResponse {
    private boolean validated;
    private Long userId;

    public LoginResponse(Long id, boolean isValid) {
        this.userId = null;
        this.validated = isValid;
    }
}
