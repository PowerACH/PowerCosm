import React from 'react'
import { Row,Col,Button,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Photo from '../../assets/head.png'
import Skincare from '../../components/pages/Skincare'

export default function Home() {
    return (
        <div>
            <Row className = "home-top-row">
                <Col xs={7} className = "home-top-row-header">
                    <p>DISCOVER HOW</p> 
                    <p className = "top-header" >Beauty is Powerful</p>
                    <Link to="/makeup" >
                        <Button variant = "outline-secondary" size="lg">shop makeup</Button>
                    </Link>
                </Col>
                <Col xs={5}>
                    <img className = "header-photo" src= {Photo} alt="woman"/>
                </Col>
            </Row>
            <Row className = "home-second-row">
                <h2 className = "skin-header">Skincare</h2>
                <Skincare />
                {/* <Col>
                <Image className = "home-image-left" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" rounded fluid/>
                </Col> */}
            </Row>
            
        </div>
    )
}
