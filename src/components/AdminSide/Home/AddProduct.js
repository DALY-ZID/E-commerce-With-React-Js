import { useState,useEffect  } from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function AddProduct() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [info, setInfo] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            img,
            price,
            brand, 
            info
        };
    
        axios.post("http://localhost:3001/products",newProduct)
        .then(res => {  
        console.log(res);
        navigate("/products")
          })   
        .catch(error=>{
            console.log(error)
            alert("Erreur ! Insertion non effectuée")
            })
        
        }
        
    return ( 
    <>
<div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '50%', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <Link to = '/'>  <KeyboardBackspaceIcon /> </Link>
        <h2 style={{ textAlign: 'center', color : 'black', fontFamily:'sans-serif',fontStyle: 'italic' }}>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <div className="col-sm-12 p-2">
              <input
                className="form-control"
                placeholder="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-sm-12 p-2">
              <input
                className="form-control"
                placeholder="Image URL"
                name="Image"
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className="col-sm-12 p-2">
              <input
                className="form-control"
                placeholder="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-sm-12 p-2">
              <input
                className="form-control"
                placeholder="Brand"
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="col-sm-12 p-2">
            <input
  className="form-control"
  placeholder="Info"
  name="info"
  value={info}
  onChange={(e) => setInfo(e.target.value)}
/>

            </div>
            <div className="col-sm-12 p-2">{img ? <img src={img} alt={img} style={{ width: '70px' }} /> : null}</div>
            <div className="col-sm-12 p-2">
              <button className="btn btn-success" style={{ width: '100%' }}>Valider</button>
            </div>
          </div>
        </form>
        
      </div>
    </div>
    <Footer/>
    </>
    );
}
export default AddProduct;
