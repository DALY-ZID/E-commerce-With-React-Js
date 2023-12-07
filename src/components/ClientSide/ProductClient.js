import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import { useShoppingCart} from 'use-shopping-cart';
function ProductClient(props) {
  const { cartCount,addItem } = useShoppingCart();

  const addToCart = (product) => {
      
    const target = { 
    id : product.id,
    title : product.title,
    img : product.img,
    price : product.price,
    brand : product.brand,
    info : product.info,
    quantity : 1
    };
    addItem(target);
    console.log('Item added to cart:', target);   
  };

  return (
    <div className="container">
      <div className="row">
        {props.products.map((product, index) => (
          <Card sx={{ maxWidth: 253, margin: 2 }} key={product.id}>
            <CardHeader 
              // avatar={
              //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              //     R
              //   </Avatar>
              // }
              title={product.title}      
              subheader={`${product.price} TND`}             />
            <CardMedia
              component="img"
              height="194"
              image={product.img}
              alt="Photo"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {/* {product.info} */}
              </Typography>
            </CardContent>
            <CardActions disableSpacing style={{marginLeft:"12%"}}>
              
              <IconButton style={{maxWidth:'50px'}} >
                <InfoIcon/>
              </IconButton>
              <IconButton style={{maxWidth:'41px'}} onClick={() => addToCart(product)}>
                <AddShoppingCartIcon/>
              </IconButton>
              
            </CardActions>
          </Card>
        ))}
      </div>
      
    </div>
  );
}

export default ProductClient;
