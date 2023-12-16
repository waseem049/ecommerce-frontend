import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../styles/cardsStyles.css";
import { Link, useNavigate } from "react-router-dom";
import cardData from "../data/cardsData.json";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/actions";

const Cards = ({ data }) => {
  // const [randomImage, setRandomImage] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   fetch("https://source.unsplash.com/random?house,cars")
  //     .then((response) => {
  //       console.log(response);
  //       return response.data;
  //     })
  //     .then((data) => {
  //       setRandomImage(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  // }, []);

  console.log(data);

  const handleProductClick = (id) => {
    console.log(id);
    navigate("/product/"+ id, { state: { id: id } });
  };

  // Adding to cart
  const handleAddToCart = (data) => {
    dispatch(addItem(data));
  };

  return (
    <Card className="cards">
      {/* {data.map((data, index) => { */}
        {/* return ( */}
          <div className="card" key={data.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  A
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={data.name}
              subheader="April 25, 2023"
            />
            <CardMedia
              component="img"
              height={194}
              image={"https://source.unsplash.com/random?house,cars"}
              alt="Random Image"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" sx={{color: "red"}}>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share" sx={{color: "blue"}}>
                <ShareIcon />
              </IconButton>
              <Button onClick={() => handleProductClick(data.id)} sx={{textDecoration:"none", color: "royalBlue", fontWeight: 800, fontSize: 18}}>
                view
              </Button>
              <Box sx={{ flexGrow: 0.9 }}/>
              <Button onClick={() => handleAddToCart(data)} sx={{color:"crimson", fontWeight:"700"}}>Add to Cart</Button>
            </CardActions>

          </div>
        );
      {/* })} */}
    </Card>
  );
};

export default Cards;
