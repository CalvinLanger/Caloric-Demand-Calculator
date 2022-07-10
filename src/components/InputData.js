import React from 'react';

function InputData(props) {
    return (
        <div className="grid">
            <label for={props.for}>{props.labelName}</label>
            <input type='text' id={props.id} value={props.value} required />
        </div >
    );
}

export default InputData;