import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';
import "./FamilyTree.css"

const Father = () => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;