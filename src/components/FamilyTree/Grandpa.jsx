import React from 'react';
import Father from './father';
import Uncle from './Uncle';
import Aunt from './Aunt';
import "./FamilyTree.css"

const Grandpa = () => {
    return (
        <div>
            <h3>Grandpa</h3>
            <div className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </div>

        </div>
    );
};

export default Grandpa;