import React,{ useState, useEffect }  from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';


export default function Register(){
    const [ input, setInput ] = useState (
    {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            userEmail: ""
            
    }
    )


    function handleChange(e) {
        const {value, id } = e.target;
        console.log(value, id);
        setInput({ ...input, [id]: value })
    }  

    function handleSubmit(e) {
        console.log(input)
        // axios.post('http://localhost:8081/register/')
        e.preventDefault(); // prevent default action of page refresh 
    }

        return (
            <div className = "loginContainer" >
                <div className = "header">Register</div>
                    <Form>
                    <Form.Group controlId="firstName">
                            {/* <Form.Label>First Name</Form.Label> */}
                            <Form.Control 
                            type="text" 
                            placeholder="First Name"
                            onChange={handleChange}
                             />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            {/* <Form.Label>Last Name</Form.Label> */}
                            <Form.Control 
                            type="text" 
                            placeholder="Last Name"
                            onChange={handleChange}
                             />
                        </Form.Group>

                    <Form.Group controlId="username">
                            {/* <Form.Label>Username</Form.Label> */}
                            <Form.Control 
                            type="text" 
                            placeholder="Username"
                            onChange={handleChange}
                             />
                        </Form.Group>

                        <Form.Group controlId="email">
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Control 
                            type="email" 
                            placeholder="email@email.com"
                            onChange={handleChange}
                             />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="password">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            onChange={handleChange}
                            />
                        </Form.Group>
                        
                        <Button 
                        variant="primary" 
                        type="submit"
                        onClick = {handleSubmit}
                        >
                            Register
                        </Button>

                        <BrowserRouter>
                        <Link to = "/LogIn" >
                        <Button 
                        variant="primary" 
                        type="submit"
                        >
                            Need to Log In?
                        </Button>
                        </Link>
                        </BrowserRouter>
                        </Form>
                </div>
        )
    }
