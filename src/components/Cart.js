import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AddIcon from '@mui/icons-material/Add';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';




const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <div className="cartcontainer">
      <Link to="/">
      <AppBar>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        <HomeIcon />
        </IconButton>
        </AppBar>
      </Link>
      <Box sx={{ml:20,mt:10}} >
      <div className="cart">
        {cart.map((item) => {
          return (
            <div className="cartcad" key={item.id}>
              <Box sx={{ flexGrow: 1 , display: 'flex' ,flexWrap: 'wrap'}}>
              <Card sx={{ maxWidth: 345 , ml:20 , mt:3}}>
        <CardHeader
        title={item.name}
       />
       <CardMedia
        component="img"
        height="194"
        image={` ../images/${item.image}`} alt="cart"
       />
       <CardContent>
       <Typography > Item Quantity : {item.quantity}</Typography>
       <Typography > Item Price : ₹{item.price}</Typography>
       <Typography > Sub Total :₹{item.price * item.quantity}</Typography>
       </CardContent>
       
       <CardActions>
            <IconButton aria-label="RemoveShoppingCart">
              <RemoveShoppingCartIcon size="small"   onClick={() => dispatch({ type: "REMOVE", payload: item })} placement="bottom-start" />
              </IconButton>
                
                <IconButton aria-label="Add">
              <AddIcon size="small"   onClick={() => dispatch({ type: "INCREASE", payload: item })} placement="bottom"/>
              </IconButton>
                
                <IconButton aria-label="Remove">
              <RemoveIcon size="small" onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }} placement="bottom-end" />
                  </IconButton>
                    
                  
            </CardActions>
     
       </Card>
       
       </Box>
                
            </div>
          );
        })}
        
      </div>
      
      {total > 0 &&
      <Typography sx={{ml:25}} variant="h6" color="text.secondary"> Total Amount to be paid:{total}</Typography>}
      
      <Button sx={{ml:25}}>Buy now</Button>
      </Box>
    </div>
  );
};

export default Cart;
