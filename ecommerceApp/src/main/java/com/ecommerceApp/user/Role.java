package com.ecommerceApp.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.ecommerceApp.user.Permission.ADMIN_READ;
import static com.ecommerceApp.user.Permission.ADMIN_CREATE;
import static com.ecommerceApp.user.Permission.ADMIN_DELETE;
import static com.ecommerceApp.user.Permission.ADMIN_UPDATE;

@RequiredArgsConstructor
public enum Role {

    CUSTOMER(Collections.emptySet()),
    ADMIN(
            Set.of(
                    ADMIN_READ,
                    ADMIN_UPDATE,
                    ADMIN_DELETE,
                    ADMIN_CREATE
            )
    )
    ;

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());

        return authorities;
    }

}
