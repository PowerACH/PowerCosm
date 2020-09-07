import React from 'react';
import '../App.css';
import axios from 'axios';


export default class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8081/products')
        .then(res => this.setState({ products: res.data }))
        .catch(error => console.error( error.message ));
    }
    render() {
        return (
            <div>
                <h1 className = "header" >Products</h1>
                <div className="container">
                {
                    this.state.products.map((products,i) => {
                        console.log(products);
                        return (
                            <div>
                            <li className="products" key={i} >
                            {/* <Link to= {`/wines/${wine.id}`}> */}
                                <img className = "product-image" src={products.image} alt="product" /> 
                                {/* </Link> */}
                                <h2>{products.prodName}</h2>                               
                            </li>
                        </div>
                        )
                    }
                  )
                }
            </div>
          </div>
        )
    }
}