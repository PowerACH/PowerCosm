import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { Button, Col,Row, Container } from 'react-bootstrap'
import '../../App.css'


export default function Cart() {
    
    const [data, setData] = useState ([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios.get("http://localhost:8081/cart");
        setData(res.data);
        return res;
    }

    const deleteData = async () => {
        const res = await axios.delete("http://localhost:8081/cart/");
        setData(res.data);
        return res;
    }
    const products = data.map((products, i) => {
        return (
        <div key={i}>
            <li className="products"  >
                <img className = "product-image" src={products.image} alt="product" /> 
                <h6 className = "product-name">{products.prodName}</h6>
                <h6>${products.price}</h6>
                <Button variant="warning">Delete</Button>                               
            </li>
        </div>
        )
    })
    console.log(data)

    return (
    <Container fluid className="cart-container">
        <div className = "cart-header-content">     
            <h3 className = "cart-header">Cart</h3> 
            <h6 className = "cart-item-count">Items: {data.length} </h6>
        </div>
        <div className = "cart-content">
        <div className = "cart-left">
            {products}
        </div>
        <div className = "cart-right">

        </div>
        </div>
    </Container>
    )
}

