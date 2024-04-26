package com.edugators.udl4cs_resources.model;

public class LoginResponse {
    private boolean validated;
    private Long userId;

    private String role;

    public LoginResponse(Long id, boolean isValid, String role) {
        this.userId = id;
        this.validated = isValid;
        this.role = role;
    }

    public Long getUserId() {
        return userId;
    }

    public boolean isValidated() {
        return validated;
    }

    public String getRole() {
        return role;
    }
}
