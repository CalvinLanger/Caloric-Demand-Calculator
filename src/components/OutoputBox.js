import React from 'react';

function OutoputBox(props) {
    return (
        <div className='grid'>
            <label>{props.labelName}</label>
            <div className='output'>{props.result}</div>
        </div>
    );
}

export default OutoputBox;