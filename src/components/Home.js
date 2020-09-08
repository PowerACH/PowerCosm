import React from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Products from './Products'

export default function Home() {
    return (
        <div>
            <Row className = "home-top-row">
                <Col xs={2} md={8} className = "home-top-row-header">
                    <p className = "top-header">Discover how</p> 
                    <p>BEAUTY IS POWERFUL</p>
                    <Link to="/shop" >
                        <Button variant = "outline-secondary" >Shop Products</Button>
                    </Link>
                </Col>
                <Col>
                    <img className = "header-photo" src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80" alt="woman"/>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    )
}
