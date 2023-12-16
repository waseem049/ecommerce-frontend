package com.ecommerceApp.services;

import com.ecommerceApp.entities.Category;
import com.ecommerceApp.entities.Products;
import com.ecommerceApp.exceptions.ResourceNotFoundException;
import com.ecommerceApp.repositories.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepo productRepo;

    // GET ALL PRODUCTS
    public List<Products> getAllProducts() {
        return productRepo.findAll();
    }

    // GET SINGLE PRODUCT
    public Products getProduct(Integer id) throws ResourceNotFoundException {
        return productRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this Id :: " + id));
    }


    public List<Products> getProductByCategory(Integer categoryId) {
        Category category = new Category();
        category.setId(categoryId);

        return productRepo.findByCategory(category);
    }

    public Products updateProduct(Integer id, Products productDetails) {
        Products product = productRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Product with id :: "+id+" is not found "));

        product.setName(productDetails.getName());
        product.setMrp(productDetails.getMrp());
        product.setPrice(productDetails.getPrice());
        product.setDiscount(productDetails.getDiscount());
        product.setUnit(productDetails.getUnit());
        product.setOut_of_stock(false);

        return productRepo.save(product);
    }

    // SAVE THE PRODUCT
    public Products saveProduct(Products product) {
        return productRepo.save(product);
    }

    // DELETING THE PRODUCT
    public void deleteProduct(Integer productId) throws ResourceNotFoundException {
        if (productRepo.existsById(productId)) {
            productRepo.deleteById(productId);
        } else {
            throw new ResourceNotFoundException("Product not found for this Id :: " + productId);
        }
    }
}
