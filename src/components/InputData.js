import React from 'react';

function InputData(props) {

    return (
        <div className="input-data">
            <label>{props.labelName}</label>
            <input type='number' id={props.id} value={props.value} onChange={props.onChangeHandler} />
        </div >
    );
}

export default InputData;