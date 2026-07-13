import React from 'react';

const ProductForm = ({ handleAddProducts }) => {

    const handleProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name, price, quantity)

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
        </div>
    );
};

export default ProductForm;