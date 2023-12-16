package com.ecommerceApp.repositories;

import com.ecommerceApp.entities.Category;
import com.ecommerceApp.entities.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepo extends JpaRepository<Products, Integer> {
    List<Products> findByName(String name);

    Optional<Products> findById(Integer id);

    List<Products> findByCategory(Category category);
}
