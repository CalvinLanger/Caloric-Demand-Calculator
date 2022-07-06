import React from 'react';

function SelectData(props) {
    return (
        <div className='grid'>
            <label for={props.for}>Gender:</label>
            <select id={props.id}>
                <option value={props.value}>Male</option>
                <option value={props.value}>Female</option>
            </select>
        </div>
    );
}

export default SelectData;