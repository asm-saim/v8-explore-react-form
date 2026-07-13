import React from 'react';
import { useState } from 'react';

const ProductForm = ({ handleAddProducts }) => {

    const [error, setError] = useState();

    const handleProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name, price, quantity)


        // validation
        if (name.length === 0) {
            setError("Name can not be empty ")
            return;
        }
        else if (price < 0) {
            setError("Price can not be negative")
            return;
        }
        else if (quantity < 0) {
            setError("Quantity can not be empty")
            return;
        }
        else {
            setError("")
        }
        //store the value in an object
        const addProduct = { name, price, quantity }
        // console.log(addProduct)
        handleAddProducts(addProduct)
    }

    return (
        <div>
            <form onSubmit={handleProduct}>
                <h2>Add Product</h2>
                <input type="text" name="name" placeholder='Product Name' />
                <br />
                <input type="text" name="price" placeholder='Price' />
                <br />
                <input type="number" name="quantity" placeholder='Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: "red" }}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;