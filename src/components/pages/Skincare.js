import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom'


function Skincare() {
    
    const [skincare, setSkincare] = useState ([]);

    useEffect(() => {
        getSkincareData()
    }, [])

    const getSkincareData = async () => {
        const res = await axios.get("http://localhost:8081/skincare");
        setSkincare(res.data);
        return res;
    }

    const products = skincare.map((products, i) => {
        return (
        <div>
            <li className="products" key={i} >
            <Link to= {`/${products.category}/${products.prodName}`}>
                <img className = "product-image" src={products.image} alt="product" /> 
                </Link>
                <h6 className = "product-name">{products.prodName}</h6>
                <h7>${products.price}</h7>                               
            </li>
        </div>
        )
    })

    return (
    <div className="container">
            {products}
    </div>
    )
}

export default Skincare

