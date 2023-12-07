import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAl7KoKJwY2S5aRr3vRJ4F-csdyKr7kaio",
    authDomain: "daly-zid.firebaseapp.com",
    projectId: "daly-zid",
    storageBucket: "daly-zid.appspot.com",
    messagingSenderId: "801001904455",
    appId: "1:801001904455:web:d56d41f750e21ebc5c5462"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
