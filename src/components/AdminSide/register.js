import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const RegisterPage = () => {
    const navigate=useNavigate();

    const [email, SetEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const auth = getAuth();
   
    const sub = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/login')
            sendEmailVerification(auth.currentUser)
            .then(() => {
            console.log("Email Sent");
                })
            .catch((err) => {
               console.log(err);
        alert(err) ;
              })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
		alert(errorMessage);
        });
    };


return (
    <section>
        <div className="form-box">
            <div className="form-value">
            <form onSubmit={sub} >
                <h2>Sign up</h2>
                
                <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required name="email"
              autoComplete="email"
              autoFocus
              onChange={({ target }) =>     
              SetEmail(target.value)}
/>
                <label>Email</label>
                </div>
                <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required id="pwd"
              autoComplete="current-password"
              onChange={({ target}) => 
              setPwd(target.value)} name='pwd'
/>
                <label>Password</label>
                </div>
                <div className="forget">
                <label>
                    <input type="checkbox" />Remember Me{' '}
                    
                </label>
                </div>
                <button>Sign up</button>
                <div className="register">
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
                </div>
            </form>
            </div>
        </div>
    </section>
);
};

export default RegisterPage;
