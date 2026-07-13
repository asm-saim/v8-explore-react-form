import React from 'react';
import { useState } from 'react';

const ControlledForm = () => {

    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');

    // password handler
    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)

        // we can set condition in controlled form
        if (password.length < 6) {
            setError("password must be more that 6 character")
        }
        else {
            setError('')
        }
    }

    // email handler
    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    // for submit the form
    const handleForm = (e) => {
        e.preventDefault()
        console.log(email, password)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="email" placeholder='Email'
                    onChange={handleEmail} defaultValue={email} required />
                <br />
                <input type="password" placeholder='Password'
                    onChange={handlePassword} defaultValue={password} required id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <div style={{ color: "red" }}>
                {error}
            </div>
        </div>
    );
};

export default ControlledForm;