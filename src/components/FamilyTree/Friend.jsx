import React from 'react';
import { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Friend = ({ asset }) => {
    // using context API
    const newAsset = useContext(AssetContext)
    console.log("NewAsset", newAsset)
    return (
        <div>
            <h3>Friend</h3>
            <p>Asset: {asset}</p>
            <p>New Treasure:{newAsset}</p>
        </div>
    );
};

export default Friend;