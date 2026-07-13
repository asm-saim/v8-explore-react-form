import React from 'react';
import Grandpa from './Grandpa';
import "./FamilyTree.css"
import { createContext } from 'react';

//Context API declaration: 
export const AssetContext = createContext('')

const FamilyTree = () => {

    const asset = "Diamond";
    const treasure = "lord of the ring"
    return (
        <div className='family'>
            <h2>Family Tree</h2>
            <AssetContext.Provider value={treasure}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;