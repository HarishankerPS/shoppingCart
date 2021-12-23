import React from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';




const Products = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div className="productConatiner">
      <div className="navigation">
        <Link to="/cart">
          <AppBar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <ShoppingBagIcon />
          </IconButton>
          </AppBar>
        </Link>
      </div>
      <div className="products">
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <Card sx={{ maxWidth: 345, mt: 10,ml:20,display: 'flex', flexDirection: 'row' ,flexGrow: 4 }}>
            <CardContent>
            <CardMedia
              component="img"
              height="194"
              image={` ../images/${item.image}`}
              alt="Paella dish"
            />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {item.name}
              </Typography>
              <Typography variant="body2">
              ₹ {item.price}
                {/* <br />
                {'"a benevolent smile"'} */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"  onClick={() => dispatch({ type: "ADD", payload: item })} >add to cart</Button>
            </CardActions>
          </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
