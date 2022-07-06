import React from 'react';

function OutoputBox(props) {
    return (
        <div className='grid'>
            <label>{props.labelName}</label>
            <div className='output'>null</div>
        </div>
    );
}

export default OutoputBox;