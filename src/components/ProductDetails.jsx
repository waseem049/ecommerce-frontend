import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import cardData from "../data/cardsData.json";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/actions";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  // let relatedProducts = useRef({});
  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const currentProductId = location.state.id;
  const currentProduct = cardData.find((p) => p.id === currentProductId);
  const relatedProducts = cardData.filter(
    (products) =>
      products.category === currentProduct.category &&
      currentProduct.id !== products.id
  );
  console.log(currentProduct);
  console.log(relatedProducts);

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    const productId = location.state && location.state.id;
    const product = cardData.find((p) => p.id === productId);

    console.log(productId);
    console.log(product);

    if (product) {
      setProductDetails(product);
      // const currentProductCategory = product.category;
      // relatedProducts.category = cardData.filter((p) => p.category === currentProductCategory && p.id !== productId);
    }
  }, []);

  // Adding to cart
  const handleAddToCart = (data) => {
    dispatch(addItem(data));
    console.log(data);
  };

  // Set up the carousel settings to control how it looks and behaves. Create an object with the settings and pass it as props to the Slider component.z
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    // autoplaySpeed: 2000,
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "stretch",
          justifyContent: "center",
          color: "crimson",
          fontWeight: 800,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            padding: "20px",
            height: "50vh",
          }}
        >
          <Box
            style={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              overflow: "hidden",
              boxShadow: "0px 0px 10px #e0e0e0",
              marginBottom: "20px",
            }}
          >
            <img
              src="https://source.unsplash.com/random?house,cars"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            ></img>
          </Box>
          <Box sx={{ display: "flex", gap: "70px" }}>
            <Button
              variant="contained"
              onClick={() => handleAddToCart(productDetails)}
            >
              {" "}
              Add to cart
            </Button>
            <Button variant="contained"> Buy Now</Button>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <h2>Product Id is {productDetails.id}</h2>
          <h4>{productDetails.name}</h4>
          <h4>{productDetails.description}</h4>
          <h4>{productDetails.price}</h4>
          <h4>{productDetails.mrp}</h4>
        </Box>
      </Box>

      {/* SHOWING THE RELATED PRODUCTS */}
      <Box >
      <Slider {...settings}>
        {relatedProducts.map((product) => {
          return (
            <Grid key={product.id} sx={{maxWidth:'100%', overflowX:'hidden', display:'flex', gap:'20px'}}>
              <Card sx={{ borderRadius:'4px', backgroundColor:'transparent', boxSizing:'border-box', padding:'10px 10px'}}> 
                <CardContent sx={{display:'flex', flexDirection:'column', gap:'8px', backgroundColor:'transparent', boxShadow:'0 0 10px rgba(0, 0, 0, 0.15)', borderRadius:'5px' }}>
                  <CardMedia
                    component="img"
                    height={194}
                    image={"https://source.unsplash.com/random?house,cars"}
                    alt="Random Image"
                    sx={{borderRadius:'5px'}}
                  />
                  <Typography variant="h5" sx={{fontSize:'20px'}}>{product.name}</Typography>
                  <Typography variant="body1">{product.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Slider>
      </Box>
    </>
  );
};

export default ProductDetails;
