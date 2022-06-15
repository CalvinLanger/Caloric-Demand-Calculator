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
  const [goal, setGoal] = useState('');
  const [activity, setActivity] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');



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
      activityLevelChoosen(woman_BMR, -500);
    } else if (goal === "Gain") {
      activityLevelChoosen(woman_BMR, 300);
    } else {
      activityLevelChoosen(woman_BMR, 0);
    }
  } else if (gender === "Male") {
    if (goal === "Loss") {
      activityLevelChoosen(male_BMR, -500);
    } else if (goal === "Gain") {
      activityLevelChoosen(male_BMR, 300);
    } else {
      activityLevelChoosen(male_BMR, 0);
    }
  }
  function activityLevelChoosen(genderBMR, goal) {
    if (activity === "lightly-active") {
      result = Math.trunc(genderBMR * 1.4 + goal);
    } else if (activity === "moderately-active") {
      result = Math.trunc(genderBMR * 1.6 + goal);
    } else if (activity === "very-active") {
      result = Math.trunc(genderBMR * 1.8 + goal);
    } else if (activity === "extra-active") {
      result = Math.trunc(genderBMR * 2.2 + goal);
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
          InputProps={{ inputProps: { min: 0, max: 140 } }}
          // The oldest person ever. Jeanne Calment(1875-1997) lived to the age 122 and 164 days
          variant="standard"
        />

        <TextField
          id="height"
          type="number"
          label="Height"
          value={height}
          onChange={heightHandler}
          InputProps={{ inputProps: { min: 0, max: 300 } }}
          // The heighest person ever know as Alton Giant - Robert Wadlow(1918-1940) 2.72cm
          variant="standard"
        />

        <TextField
          id="weight"
          type="number"
          label="Weight"
          value={weight}
          onChange={weightHandler}
          InputProps={{ inputProps: { min: 0, max: 600 } }}
          // The heavest man Jon Brower Minnoch(1941-1983) recorded weighing 635kg
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
        <div id="result" className="result-board">
          {result} kcal
        </div>
        <p className="alert">Fill in all data!</p>
      </Card>
    </div >
  );
}

export default App;
