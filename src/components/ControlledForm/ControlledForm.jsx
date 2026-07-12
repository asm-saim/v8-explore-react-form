import React from 'react';
import { useState } from 'react';

const ControlledForm = () => {

    const handleForm = (e) => {
        e.preventDefault()
        console.log(e.target.email.value)
    }
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')

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


    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="email" name="email" id="" required />
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