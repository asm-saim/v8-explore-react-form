import React, { useContext, useState } from 'react';
import Grandpa from './Grandpa';
import "./FamilyTree.css"
import { createContext } from 'react';

//Context API declaration: 
export const AssetContext = createContext('')

export const MoneyContext = createContext('')

const FamilyTree = () => {

    const [money, setMoney] = useState(0)

    const asset = "Diamond";
    const treasure = "lord of the ring"
    return (
        <div className='family'>
            <h2>Family Tree</h2>
            <h3>Total family money: {money} </h3>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={treasure}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>

        </div>
    );
};

export default FamilyTree;