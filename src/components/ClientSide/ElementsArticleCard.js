import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { useShoppingCart } from 'use-shopping-cart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import Cart from './Cart';
import { ImportExport } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import styled from 'styled-components';
import logo from '../AdminSide/logo.png';
import LoginIcon from '@mui/icons-material/Login';
import Footer from '../AdminSide/Home/Footer';

function ElementsArticleCard(props) {
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '35px',
  };

  const { cartCount, addItem } = useShoppingCart();

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
    console.log("add to cart", target);
  };
  const NavWrapper = styled.nav`
  background: var(--mainGrey);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;
  return (
    <div>
      
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" style={{ backgroundColor: 'grey', width: '100%' }}>
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-brand" style={{ width: '65px' }} />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5" style={{color : 'white'}}>
          <Link to="/" className="nav-link" >
            Products
          </Link>
        </li>

      
        

      </ul>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '68%' }}>
  <Link exact to="/login" style={{ marginRight: '15px' }}>
    <Button color="inherit">
      Log in
    </Button>
  </Link>
  <Link exact to="/cart">
    <IconButton color="inherit" style={{ marginLeft: '-10px' }}>
      <AddShoppingCartIcon />
      <Typography variant="body1" style={{ marginLeft: '5px', marginRight: '5px' }}>{cartCount}</Typography>
      <Typography variant="body1">my Cart</Typography>
    </IconButton>
  </Link>
</div>


      

    </NavWrapper>

      {/* Begin of  App bar */}
                {/* <Box >
                    <AppBar position="static" style={{"backgroundColor":"black"}}>
                    <Toolbar>
                      
                        
                        
                        <Button color="inherit" >   
                          <Link to="/cart">{cartCount}  <AddShoppingCartIcon/>
                          </Link>
                        </Button> 
                    </Toolbar>
                    </AppBar>
                </Box> */}
      {/* End of  App bar */}
      <form className="d-flex w-25 mx-auto mb-5" role="search">
                <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
      <div className="container">
      <div className="row">
      {props.articles && props.articles.map((product, index) => {
        return (
          <Card sx={{ maxWidth: 250, margin: 1 }} key={product.id}>
            <CardHeader 
              // avatar={
              //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              //     R
              //   </Avatar>
              // }
              title={product.title}      
              subheader={`${product.price} TND`}  />
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
            {/* <Link exact to = {`/Info/${product.id}`} >
<IconButton style={{maxWidth:'50px'}} >
  <InfoIcon />
</IconButton>              </Link> */}

              <IconButton style={{maxWidth:'41px'}} onClick={() => addToCart(product)} >
                <AddShoppingCartIcon/>
              </IconButton>
              
            </CardActions>
          </Card>
        );
      })}
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ElementsArticleCard;

