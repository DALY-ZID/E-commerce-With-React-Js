import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import Info from '../../ClientSide/info';
import { useState } from 'react';
function Product(props) {
  const[products,setProducts]=useState([]);

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
            <Link exact to = {`/Info/${product.id}`} >

              <IconButton style={{maxWidth:'50px'}} >
                <InfoIcon />
              </IconButton>              </Link>

              {/* <IconButton style={{maxWidth:'41px'}}>
                <AddShoppingCartIcon />
              </IconButton> */}
              <Link exact to = {`/EditProduct/${product.id}`} >
                <IconButton key="edit" aria-label="edit" style={{maxWidth:'50px'}}>
                  <EditIcon />
                </IconButton>
              </Link>
              <IconButton key="delete" aria-label="delete" style={{maxWidth:'50px'}} onClick={()=>{props.deleteProd(product.id)}}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
      
    </div>
  );
}

export default Product;
