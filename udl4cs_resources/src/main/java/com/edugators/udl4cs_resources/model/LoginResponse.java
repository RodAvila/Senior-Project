package com.edugators.udl4cs_resources.model;

public class LoginResponse {
    private boolean validated;
    private Long userId;

    public LoginResponse(Long id, boolean isValid) {
        this.userId = id;
        this.validated = isValid;
    }

    public Long getUserId() {
        return userId;
    }

    public boolean isValidated() {
        return validated;
    }
}
