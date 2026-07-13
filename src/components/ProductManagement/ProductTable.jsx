import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <h2>Products: {products.length}</h2>
        </div>
    );
};

export default ProductTable;