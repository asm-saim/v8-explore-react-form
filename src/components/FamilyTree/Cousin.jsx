import React from 'react';
import Friend from './Friend';

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Mudasser" && <Friend asset={asset}></Friend>
            }
        </div>
    );
};

export default Cousin;