import React from 'react';

function InputData(props) {
    return (
        <div className="grid">
            <label for={props.for}>{props.labelName}</label>
            <input type='text' id={props.id} required />
        </div >
    );
}

export default InputData;