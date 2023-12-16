package com.ecommerceApp.controller;

import com.ecommerceApp.entities.Products;
import com.ecommerceApp.exceptions.ResourceNotFoundException;
import com.ecommerceApp.services.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/")
    public List<Products> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Products getProduct(
            @PathVariable(name = "id") Integer id
    ){
        return productService.getProduct(id);
    }

//    GETTING PRODUCT BY CATEGORY
    @GetMapping("/category/{categoryId}")
    public List<Products> getProductsByCategory(@PathVariable Integer categoryId) {
        return productService.getProductByCategory(categoryId);
    }

    @PostMapping("/")
    public Products createProduct(@Valid @RequestBody Products product){
        return productService.saveProduct(product);
    }

    @PutMapping("/{id}")
    public Products updateProduct(@PathVariable Integer id, @Valid @RequestBody Products productDetails) {
        return productService.updateProduct(id, productDetails);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Integer productId)
        throws ResourceNotFoundException {
            productService.deleteProduct(productId);
            Map<String, Boolean> response=new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return response;
    }
}
