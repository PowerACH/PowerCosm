import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import '../../App.css'
import { Container, Col, Row, Button, Spinner } from 'react-bootstrap';

export default function ProductInfo() {
    let { prodName, category } = useParams();
    const [data, setData] = useState([]);
    const [cartData, setCartData] = setState({
        prodName: "",
        price: "",
        quantity: "",
        image: ""
    })

    const getProductData = async () => {
        const res = await axios.get("http://localhost:8081/" + category + "/" + prodName)
        setData(res.data);
        return res;
        
    }
    useEffect(() => {
        getProductData()
    }, []);

        const prod = data ? (
            <Container className="product" >
                    <Col className = "product-left">
                        <img className = "single-image" src={data.image} alt="product" />
                    </Col>
                    <Col className = "product-right">
                        <h4 className = "prodName"> {data.prodName}</h4>
                        <h6>{data.prodInfo}</h6>
                        <p> Price: ${data.price}</p>
                        <Button variant="primary" size="lg" block>
                            Add To Cart
                        </Button>
                    </Col>
            </Container>
        ) : (
            // <div className="center">Loading...</div>
            <Spinner animation="grow" />
        )
        return(
           
            <Container className="container">
            <div className = "back-button">
                <Link to="/">back</Link>
            </div>
                <h4>{ prod }</h4>
            </Container>
        )
    }
