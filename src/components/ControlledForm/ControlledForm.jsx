import React from 'react';
import { useState } from 'react';

const ControlledForm = () => {

    const handleForm = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
    }

    const [password, setPassword] = useState('')

    const handlePassword = (e) => {
        console.log(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" id="" required />
                <br />
                <input type="email" name="email" id="" required />
                <br />
                <input type="password" onChange={handlePassword} defaultValue={password} required id="" placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledForm;