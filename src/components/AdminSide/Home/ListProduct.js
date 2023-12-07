import axios from 'axios';
import {useEffect,useState} from 'react';
import Product from './Product'
import Navbar from './navbar';
import Footer from './Footer';

function ListProduct() {
    const[products,setProducts]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/products")
        .then((response)=>setProducts(response.data));
    }, []);
    const deleteProd = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
            return;
        }
    
        await axios.delete('http://localhost:3001/products/' + id)
            .then(() => {
                console.log('successfully deleted!')
                setProducts(prevArticles => prevArticles.filter((article) => article.id !== id));
            }).catch((error) => {
                console.log(error)
            })
    }

    return ( 
        <div>
            < Navbar />
            <h2 style={{color:'black',marginTop : '10%'}}> Products </h2>
            {/*deleteProd={deleteProd} */}
            {/* <ElementsProduct products = {products}   />  */}
            <Product products = {products}  deleteProd = {deleteProd} /> 
            <Footer/>
        </div>
    );
}

export default ListProduct;