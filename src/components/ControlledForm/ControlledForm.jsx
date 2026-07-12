import React from 'react';

const ControlledForm = () => {

    const handleForm = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" id="" required />
                <br />
                <input type="email" name="email" id="" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledForm;