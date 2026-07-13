import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <h2>Products: {products.length}</h2>
            <table style={{margin: "0 auto", border:"1px solid cyan"}}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;