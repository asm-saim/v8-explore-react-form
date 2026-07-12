import React from 'react';
import { useRef } from 'react';

const UncontrolledForm = () => {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleUnControlled = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        console.log(name, email)
    }

    return (
        <div>
            <form onSubmit={handleUnControlled}>
                <input ref={nameRef} type="text" name="name" placeholder='Name' />
                <br />
                <input ref={emailRef} type="email" name="email" placeholder='Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default UncontrolledForm;