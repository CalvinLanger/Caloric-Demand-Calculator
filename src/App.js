import React, { useState } from 'react';

import './App.css';
import { Card, MenuItem, TextField } from '@mui/material';


const goals = [
  {
    value: 'Loss',
    label: 'Fat loss',
  },
  {
    value: 'Keep',
    label: 'Keep weight',
  },
  {
    value: 'Gain',
    label: 'Gain mass',
  }
];

const activityLevel = [
  {
    value: 'lightly-active',
    label: 'Slightly active (modarate exercise sedentary work)'
  },
  {
    value: 'moderately-active',
    label: 'Moderately active (intense exercise but sedentary work)'
  },
  {
    value: 'very-active',
    label: 'Active (moderate exercise and work while moving)'
  },
  {
    value: 'extra-active',
    label: 'Very active (intense exercise and work motion)'
  }
];

function App() {

  let result = "0";
  const [goal, setGoal] = useState('');
  const [activity, setActivity] = useState('');

  const resultHandler = (event) => {
    console.log(event.target.value);
  };

  const selectedGoal = (event) => {
    setGoal(event.target.value);
  };

  const selectedActivity = (event) => {
    setActivity(event.target.value);
  };

  return (
    <div className="container">
      <Card className="input-card grid-col-1">
        <div className="title-card">
          <h2>Calorie Calculator</h2>
          <p>Use the calorie calculator to estimate the number of daily calories your body needs to maintain your current weight.</p>
        </div>
        <TextField
          id="age"
          label="Age"
          onChange={resultHandler}
          variant="standard" />
        <TextField
          id="height"
          label="Height"
          onChange={resultHandler}
          variant="standard" />
        <TextField
          id="weight"
          label="Weight"
          onChange={resultHandler}
          variant="standard" />

        <TextField
          id="selectGoal"
          select
          value={goal}
          onChange={selectedGoal}
          label="Goal"
          variant="standard"
        >
          {goals.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="selectActivity"
          select
          value={activity}
          onChange={selectedActivity}
          label="Activity Level"
          variant="standard"
        >
          {activityLevel.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div id="result" className="result-board">{result} kcal</div>
      </Card>
    </div >
  );
}

export default App;
