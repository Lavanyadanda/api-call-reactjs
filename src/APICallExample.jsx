// import { useEffect ,useState} from 'react';
// import React from 'react';
// import APIcallExampleFile from './APICallExampleFile';

// function APIcallExample(){
//     let [api,setAPI]=useState([]);//all hooks are written in function 
//     useEffect(
//         ()=>{
//             getproducts();
//         },[])
//         async function getproducts(){
//             let r=await fetch('https://fakestoreapi.com/products');
//             //console.log(r);
//            let list=await r.json();
//            setAPI(list);
//         }
//     if(api.length==0){
//         return (<h3>fetching data.....</h3>);
//     }
//     /*
//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products');
//             .then(res=>res.json())
//             .then(json=>console.log(json))


//     })*/


// return (
//    // <h1>Poduct List</h1>
//    <>
//    <div className="product-list">{
//          api.map((p)=>{
//        // <APIcallExampleFile title={p.title} key={p.id} image={p.image} price={p.price} rating={p.rating} /> or
//         <APIcallExampleFile {...p} key={p.id}/>
//  } )
// }
//    </div>
//    </>
   

// )

// }
// export default APIcallExample;




import { useEffect, useState } from 'react';
import React from 'react';
import APIcallExampleFile from './APICallExampleFile';
import './App.css';

function APIcallExample() {
    let [api, setAPI] = useState([]);
    
    useEffect(() => {
        getproducts();
    }, []);
    
    async function getproducts() {
        let r = await fetch('https://fakestoreapi.com/products');
        let list = await r.json();
        setAPI(list);
    }

    if(api.length === 0) {
        return (<h3>fetching data.....</h3>);
    }

    return (
        <>
            <h1>Product List</h1>
            <div className="product-list">
                {api.map((p) => (
                    <APIcallExampleFile {...p} key={p.id} />
                ))}
            </div>
        </>
    )
}
export default APIcallExample;