import React,{useState} from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography'; 
import { useShoppingCart } from 'use-shopping-cart';
import logo from '../logo.png';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {auth} from "../../fireConfig";
import { onAuthStateChanged} from "firebase/auth";

function Navbar() {
    const { cartCount } = useShoppingCart(); // Destructure cartCount from the hook

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });
  
    const logOut=()=>{
  
      auth.signOut().then(() => {
           console.log('singOut');
         }).catch((error) => {
           console.log(error);
         });
      
       }
  
  const NavWrapper = styled.nav`
    background: var(--mainGrey);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1rem;
      text-transform: capitalize;
    }
  `;

  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" style={{backgroundColor : 'grey'}}>
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-brand" style={{ width: '65px' }} />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5" style={{color : 'white'}}>
          <Link to="/" className="nav-link" >
            Products
          </Link>
        </li>

      
        <li style={{ display: 'flex', alignItems: 'center', marginLeft:"320%" }}>
            <span style={{ marginRight: '8px' }}>Add product</span>
            <Link  to = '/AddProduct'>
            <IconButton style={{maxWidth:'40px'}}>
            <AddCircleOutlineIcon />
            </IconButton>
            </Link>
            
       </li>

      </ul>
    
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '68%' }}>
        {/* <LoginIcon />
        <Link to="/login">
          <Button variant="outlined" style={{ maxWidth: '5%', marginLeft: '8px' }}>Login</Button>
        </Link> */}
        {!isLoggedIn
          ? (
            <Link className="btn btn-outline-primary" to="/login">Log In</Link>
                ):(
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained" onClick={()=>logOut()}>Log Out</Button>
            )
      }

</div>

      
      {/* <IconButton  color="inherit" style={{marginLeft:'27%', }}>
        <AddShoppingCartIcon  />
        <Typography variant="body1">{cartCount}</Typography>
        <Typography variant="body1">my Cart</Typography>

      </IconButton> */}
    </NavWrapper>
  );
}

export default Navbar;
