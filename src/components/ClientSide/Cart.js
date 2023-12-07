import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Plus from '@mui/icons-material/AddAlarm';
import Minus from '@mui/icons-material/RemoveCircle';
import Delete from '@mui/icons-material/Delete';

import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const { cartDetails, removeItem, clearCart, totalPrice, cartCount, incrementItem, decrementItem } = useShoppingCart();
  const navigate = useNavigate();

  const [payment, setpayment] = React.useState(false);

  const onToken = (token) => {
    // pour finaliser la transaction vous pouvez aussi envoyer le token au backend
    console.log(token);
    //vider le cart
    clearCart();
    //naviguer vers la page d'accueil
    navigate('/');
  };
  
  const imprimer = () => {
    navigate('/pdfCart');
   };

  const commander = () => {
    setpayment(true);
  };

  const more = () => {
    navigate('/');
  };

  const clear = () => {
    clearCart();
  };

  if (cartCount === 0) {
    return <h1>Cart Empty</h1>;
  }

  return (
    <div>
           {payment ? <StripeCheckout
                token={onToken}
                stripeKey="pk_test_51OD2B8IEccjNuzsfCgafYg9qXoX5txppSPPfC9pZchiwcmq6xW22cBqJhwfDR5ypx7tn83rpgHaQXQUIUWiyK5Kf00ixc5I3Wm"
                amount={totalPrice*100} // Montant en centimes
                currency="USD" // Devise
                /> :null}

      <Grid container spacing={2} columns={15} marginTop={10} marginLeft={10}>
        <Grid item xs={8}>
          {Object.values(cartDetails).map((item) => (
            <Grid item xs={8} key={item.id}>
              <img
                alt={item.title}
                style={{ margin: '0 auto', maxHeight: '100px' }}
                src={item.img}
                className="img-fluid d-block"
              />
              <h5>{item.title}</h5>
              <p>Prix: {item.price} TND</p>
              <p>Brand: {item.brand}</p>
              <button
                  onClick={() => {
                    
                      incrementItem(item.id);
                   

                  }}
                >
                  <Plus color="success" />
                </button>

              <button onClick={() => decrementItem(item.id)}>
                <Minus color="warning" />
              </button>
              {item.quantity === 1 && (
                <button onClick={() => removeItem(item.id)}>
                  <Delete color="error" />
                </button>
              )}
              <hr />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={5}>
          <Button color="error" variant="outlined" onClick={more}>
            Ajouter des articles
          </Button>
          <p>Total Articles</p>
          <h4>{cartCount}</h4>
          <p>Total Payement</p>
          <h3>{totalPrice} TND</h3>
          <hr />
          <div>
            <Button color="warning" variant="outlined" onClick={commander}>
              Commander
            </Button>
            <Button color="secondary" variant="outlined" onClick={imprimer}>
                        Imprimer PDF
            </Button>

            <Button color="info" variant="outlined" onClick={clear}>
              Annuler
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
