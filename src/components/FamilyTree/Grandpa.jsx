import React from 'react';
import Father from './father';
import Uncle from './Uncle';
import Aunt from './Aunt';
import "./FamilyTree.css"

const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <div className='flex'>
                <Father asset={asset}></Father>
                <Uncle></Uncle>
                <Aunt asset={asset}></Aunt>
            </div>

        </div>
    );
};

export default Grandpa;