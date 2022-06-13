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

const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female'
  }
];

function App() {

  let result = 0;
  const [goal, setGoal] = useState('Keep');
  const [activity, setActivity] = useState('very-active');
  const [age, setAge] = useState('30');
  const [height, setHeight] = useState('185');
  const [weight, setWeight] = useState('75');
  const [gender, setGender] = useState('Male');



  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const heightHandler = (event) => {
    setHeight(event.target.value);
  };

  const weightHandler = (event) => {
    setWeight(event.target.value);
  };

  const goalHandler = (event) => {
    setGoal(event.target.value);
  };

  const activityHandler = (event) => {
    setActivity(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  // Harris - Benedict formula
  let male_BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
  let woman_BMR = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age - 161);

  if (gender === "Female") {
    if (goal === "Loss") {
      result = Math.trunc(woman_BMR) - 500;
    } else if (goal === "Gain") {
      result = Math.trunc(woman_BMR) + 300;
    } else {
      result = Math.trunc(woman_BMR);
    }
  } else if (gender === "Male") {
    if (goal === "Loss") {
      result = Math.trunc(male_BMR) - 500;
    } else if (goal === "Gain") {
      result = Math.trunc(male_BMR) + 300;
    } else {
      result = Math.trunc(male_BMR);
    }
  }
  function activityLevelChoosen() {
    if (activity === "lightly-active") {
      return result * 1.4;
    } else if (activity === "moderately-active") {
      return result * 1.6;
    } else if (activity === "very-active") {
      return result * 1.8;
    } else if (activity === "extra-active") {
      return result * 2.2;
    } else {
      return "error";
    }
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
          type="number"
          label="Age"
          value={age}
          onChange={ageHandler}
          InputProps={{ inputProps: { min: 0 } }}
          variant="standard"
        />

        <TextField
          id="height"
          type="number"
          label="Height"
          value={height}
          onChange={heightHandler}
          InputProps={{ inputProps: { min: 0 } }}
          variant="standard"
        />

        <TextField
          id="weight"
          type="number"
          label="Weight"
          value={weight}
          onChange={weightHandler}
          InputProps={{ inputProps: { min: 0 } }}
          variant="standard"
        />

        <TextField
          id="goal"
          select
          value={goal}
          onChange={goalHandler}
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
          id="activity"
          select
          value={activity}
          onChange={activityHandler}
          label="Activity Level"
          variant="standard"
        >
          {activityLevel.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="gender"
          select
          value={gender}
          onChange={genderHandler}
          label="Gender"
          variant="standard"
        >
          {genders.map((option) => (
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
