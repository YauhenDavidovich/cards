import React from 'react';
import JSONDATA from '../../../MOCK_DATA.json';

function SearchField() {
    return (
        <div>
            <input type={"text"} placeholder={"Search..."}/>
            {JSONDATA.map(item => {
                return <div>{item.first_name}</div>
            })}
        </div>
    );
}

export default SearchField;