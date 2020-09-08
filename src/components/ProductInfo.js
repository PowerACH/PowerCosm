import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



//Single Wine Routed Page
export default class ProductInfo extends React.Component {
    state = {
        id: [],
        prodName: []
    }

    componentDidMount(){
        // console.log("Props are: " + JSON.stringify(this.props, null, 2))
        let prodName = this.props.match.params.prodName;
        axios.get('http://localhost:8081/products/' + prodName)
            .then(res => {
                this.setState({
                    prodName: res.data
                })
                console.log(this.props.match)
            })
        this.setState({
            prodName: prodName
        })
    }
    render() { 
        const prod = this.state.id ? (
            <div className="wine">
                <img src={this.state.id.picture} alt="wine" />
                <h4 className = "center"> {this.state.id.name}</h4>
                <p>{this.state.id.description}</p>
                <p> Year: {this.state.id.year}</p>
                <p> Country: {this.state.id.countryy}</p>
                <p> Region: {this.state.id.region}</p>
                <p> Price: ${this.state.id.price}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return(
           
            <div className="container">
            <div>
                <Link to="/">back</Link>
            </div>
                <h4>{ prod }</h4>
            </div>
        )
    }
}