import React, { useState } from 'react';

const activityOptions = [
    {
        value: 'lightly-active',
        label: 'Lightly active'
    },
    {
        value: 'moderately-active',
        label: 'Moderately active'
    },
    {
        value: 'very-active',
        label: 'Active'
    },
    {
        value: 'extra-active',
        label: 'Very active'
    }
];

function WorkPerformed(props) {

    const [activity, setActivity] = useState("lightly-active");

    function handleActivity(event) {
        const selectedActivity = event.target.value;
        setActivity(selectedActivity);
        props.onSelectedActivity(selectedActivity);
    }

    return (
        <div className='work-performed'>
            <label>Work performed:</label>
            <select value={activity} onChange={handleActivity}>
                {activityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default WorkPerformed;