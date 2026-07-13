import React from 'react';
import Friend from './Friend';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Friend asset={asset}></Friend>
        </div>
    );
};

export default Myself;