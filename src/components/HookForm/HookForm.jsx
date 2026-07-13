import React from 'react';
import useInputHook from '../../hooks/useInputHook';

const HookForm = () => {
    const [name, nameOnChange] = useInputHook("");
    const [email, emailOnChange] = useInputHook("")
    const [password, passwordOnChange] = useInputHook("")

    // IF YOU WANT OT SEE ON TYPE
    console.log(name, email, password)

    const handleForm = (e) => {
        e.preventDefault()
        console.log("form", name, email, password)

    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input onChange={nameOnChange} type="text" name="" placeholder='Name' />
                <br />
                <input onChange={emailOnChange} type="email" name="" placeholder='Email' />
                <br />
                <input type="password" onChange={passwordOnChange} name="" placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;