import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../App.css'
import { Container, Col, Row, Button, Spinner } from 'react-bootstrap';



//Single Wine Routed Page
export default class ProductInfo extends React.Component {
    state = {
        data: [],
        prodName: []
    }

    componentDidMount(){
        // console.log("Props are: " + JSON.stringify(this.props, null, 2))
        let prodName = this.props.match.params.prodName;
        axios.get('http://localhost:8081/products/' + prodName)
            .then(res => {
                this.setState({
                    data: res.data
                })
                console.log(this.state.data)
            })
        this.setState({
            prodName: prodName
        })
    }
    render() { 
        const prod = this.state.data ? (
            <Container className="product" >
                <Row>
                    <Col>
                        <img src={this.state.data.image} alt="product" />
                    </Col>
                    <Col>
                        <h4 className = "prodName"> {this.state.data.prodName}</h4>
                        <h6>{this.state.data.prodInfo}</h6>
                        <p> Price: ${this.state.data.price}</p>
                        <Button variant="primary" size="lg" block>
                            Add To Cart
                        </Button>
                    </Col>
                </Row>
            </Container>
        ) : (
            // <div className="center">Loading...</div>
            <Spinner animation="grow" />
        )
        return(
           
            <Container className="container">
            <div className = "">
                <Link to="/shop">back</Link>
            </div>
                <h4>{ prod }</h4>
            </Container>
        )
    }
}