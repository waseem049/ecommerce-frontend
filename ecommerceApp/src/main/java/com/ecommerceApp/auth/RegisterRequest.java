package com.ecommerceApp.auth;

import com.ecommerceApp.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String name;
    private String email;
    private String phone;
    private String address;
    private String username;
    private String password;
    private Role role;
}
