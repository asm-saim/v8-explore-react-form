import React from 'react';
import Cousin from './Cousin';

const Aunt = ({ asset }) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name="Yasin"></Cousin>
                <Cousin name="Mudasser" asset={asset}></Cousin>
            </section>

        </div>
    );
};

export default Aunt;