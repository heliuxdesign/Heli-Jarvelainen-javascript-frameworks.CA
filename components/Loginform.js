import { useState } from "react";
import React from 'react';
import Router from "next/router";
import displayError from "../components/messages";


const Loginform = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
  
        e.preventDefault();
        const response = await fetch('http://localhost:1337/auth/local', {
                                     method: 'POST',
                                     body: JSON.stringify({ identifier: email, password: password}),
                                     headers: {'Content-Type': 'application/json'}});

        const data = await response.json();
        console.log(data);
        if (data.user) {
            console.log("router push")
            Router.push('/admin');
        } 
        
        if (data.error) {
          displayError("error " + data.error,
                     "Failed to connect " + data.error,
                     ".messagecontainer"); 
        }
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
           Email:
           <input
                type="email"
                value={email}
                onChange={(e) =>
                setEmail(e.target.value)} />
        </label>
        <label>
           Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    );
};

export default Loginform;




