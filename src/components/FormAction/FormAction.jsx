import React from 'react';

const handleAction = (formData) => {
    console.log(formData.get('name'))
    console.log(formData.get('email'))
}


const FormAction = () => {
    return (
        <div>
            <form action={handleAction}>
                <input type="text" placeholder='Enter Name' name="name" id="" />
                <br />
                <input type="email" placeholder='Enter Email' name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;