import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

export default function LogIn() { 
    const [input, setInput] = useState(
    {
        username: " ",
        password: " "
    });

    async function grabAllUsers() {
        try{
            const res = await axios.get('http://localhost:8081/users');
            console.log(res.data)
        } catch(e) {
            console.error(e, e.message);
        }
    }
    useEffect(() => {
        grabAllUsers();
    })
        function handleChange(e) {
            const {value, id } = e.target;
            console.log(value, id);
            setInput({ ...input, [id]: value })
        }    

        //function for submission of form
        function handleSubmit(e) {
            console.log(input)
            axios.get('http://localhost:8081/login/' + input.username + "/" + input.password )
            e.preventDefault(); // prevent default action of page refresh 
        }

        return (
            <div className = "loginContainer" >
                <div className = "header">Login</div>
                <div className = "loginContent">
                    
                    <Form>
                        <Form.Group controlId = "username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Username"
                            onChange={handleChange}
                             />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={handleChange}
                             />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button 
                        variant="primary" 
                        type="submit"
                        onClick = {handleSubmit}
                        >
                            Log In
                        </Button>
                        
                        <Button 
                        variant="primary" 
                        type="submit"
                        onClick = {() => ("Register")}
                        >
                            Want to Register?
                        </Button>
                        </Form>
                </div>
            </div>
        )
    }
