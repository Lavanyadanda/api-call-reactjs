
// import React from 'react';
//  function  APIcallExampleFile({title,price,image,rating}){
// return (
//     <div className="card">
//     <img src={image}/>
//     <h4>product title:{title}</h4>
//     <p>price:${price}</p>
//     <p>rating:${rating.rate}</p>
    
//     </div>
//     //as rating is object form
// )
//  }
//  export default APIcallExampleFile;






import React from 'react';
import './App.css';

function APIcallExampleFile({title, price, image, rating}) {
    return (
        <div className="card">
            <img src={image} alt={title}/>
            <h4>product title: {title}</h4>
            <p>price: ${price}</p>
            <p>rating: {rating.rate} ({rating.count} reviews)</p>
        </div>
    )
}
export default APIcallExampleFile;