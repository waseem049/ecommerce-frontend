package com.ecommerceApp.services;

import com.ecommerceApp.entities.Category;
import com.ecommerceApp.exceptions.ResourceNotFoundException;
import com.ecommerceApp.repositories.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepo categoryRepo;

    public List<Category> getAllCategories(){
        return categoryRepo.findAll();
    }

    public Category getCategoryById(Integer id){
        return categoryRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Category not found :: " +id));
    }

    public Category createCategory(Category category) {
        return categoryRepo.save(category);
    }

    public Category updateCategory(Integer id, Category categoryDetails){
        Category category = categoryRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Category not found to update :: " +id));

        category.setName(categoryDetails.getName());
        category.setAvailable(true);

        return categoryRepo.save(category);
    }

    public ResponseEntity<?> deleteCategory(@PathVariable Integer id) {
        Category category = categoryRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Deleting Category not found with id :: " +id));

        categoryRepo.delete(category);

        return ResponseEntity.ok().build();
    }
}
