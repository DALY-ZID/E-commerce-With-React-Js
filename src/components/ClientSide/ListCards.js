// import axios from 'axios';
// import {useEffect,useState} from 'react';
// import ProductClient from './ProductClient';
// import ElementsArticleCard from './ElementsArticleCard';
// function ListCards() {
//     const [cards, setCards] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:3001/products")
//         .then((response)=>setCards(response.data));
//     }, []);
//     return ( 
//         <div>
//             <ElementsArticleCard products = {cards} />
//         </div>
//     );
// }

// export default ListCards;
import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementArticleCard from './ElementsArticleCard';
function ListArticlesCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((res) => {
        const data = res.data;
        setArticles(data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

   return (
    <div className="container">
          <ElementArticleCard articles={articles}  />
          
    </div>
  );
}

export default ListArticlesCard;

