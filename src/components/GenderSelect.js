import React, { useState } from 'react';

const genderOptions = [
    {
        value: 'male',
        label: 'Male'
    },
    {
        value: 'female',
        label: 'Female'
    }
];

function GenderSelect(props) {

    const [gender, setGender] = useState('male');

    function handleGender(event) {
        const selectedGender = event.target.value;
        setGender(selectedGender);
        props.onGenderChange(selectedGender);
    }

    return (
        <div className='gender-select'>
            <label>Gender:</label>
            <select value={gender} onChange={handleGender}>
                {genderOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default GenderSelect;