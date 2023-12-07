import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState,useEffect  } from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import axios from 'axios';

function Info(props) {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [info, setInfo] = useState("");
    
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:3001/products/'+id).then(res => {
            setTitle(res.data.title);
            setImg(res.data.img);
            setPrice(res.data.price);
            setBrand(res.data.brand);
            setInfo(res.data.info);
        })
    },[id]);

    console.log(setTitle()); // Ajout de logs pour vérifier les valeurs des états
    console.log("Img:", img);
    console.log("Price:", price);
    console.log("Brand:", brand);
    console.log("Info:", info);
  return (
    <div className="container py-5">
    {/* Title */}
    <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h2>{ title }</h2>
        </div>
    </div>
    {/* Product Info */}
    <div className="row">
        <div className="col-10 mx-auto col-md-6 my-6 text-capitalize">
            <img src={ img } alt="product" className="img-fluid" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-6 text-capitalize">
            <h3>model: { title }</h3>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                made by: <span className="text-uppercase">{ brand }</span>
            </h4>
            <h4 className="text-blue">
                <strong>
                    price : { price }<span>DH</span>
                </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                more info:
            </p>
            <p className="text-muted lead">{ info }</p>
            {/* Buttons */}
            <div>
                <Link to="/">
                    <Button>
                        back to home
                    </Button>
                </Link>
                
            </div>
        </div>
    </div>
</div>
  );
}

export default Info;
