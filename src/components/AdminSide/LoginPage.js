import { Link } from 'react-router-dom';
import '../../index.css';
import { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../fireConfig";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
function LoginPage () {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`submitted email: 
          ${email} password: ${password}`);
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/products");
             })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorMessage);
        });
        }

        const forgotPass=()=>{
            if(email){
            sendPasswordResetEmail(auth, email)
              .then(() => {
                console.log("Password reset email sent!") 
                })
              .catch((error) => {
                console.log(error);
              });
            }
            else
            alert ('Type your Email');
          }
  
return (
    <section >
        <div className="form-box">
            <div className="form-value">
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />         
                <label>Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" 
                    name="password" id="password" autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                    <label>Password</label>
                </div>
                <div className="forget">
                    <label>
                        <input type="checkbox" />Remember Me{' '}
                        <Link onClick={()=>forgotPass()}>
                            Forgot Password?</Link>
                    </label>
                </div>
                <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={(event)=>handleSubmit(event)}
          >
        Sign in to account</Button>

                <div className="register">
                <p>
                    Don't have an account? <Link to="/register">Sign up</Link>  
                    
                </p>
                </div>
                
            </form>
            </div>
        </div>
    </section>
);
};

export default LoginPage;
