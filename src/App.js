import React, { useState } from 'react';

import './App.css';
import './MediaQuerys.css';
import InputData from './components/InputData';
import Footer from './components/Footer';
import OutputBox from './components/OutoputBox';
import MacroDemand from './components/MacroDemand';

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

function App() {

  let restingMetabolism, dailyMetabolism, totalMetabolism;

  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState("lightly-active");
  const [dailySteps, setDailySteps] = useState('');

  function handleGender(event) {
    setGender(event.target.value);
  }

  function handleWeight(event) {
    setWeight(event.target.value);
  }

  function handleHeight(event) {
    setHeight(event.target.value);
  }

  function handleAge(event) {
    setAge(event.target.value);
  }
  function handleActivity(event) {
    setActivity(event.target.value);
  }

  function handleSteps(event) {
    setDailySteps(event.target.value);
  }

  // BASAL BMR FOR WOMAN AND MAN
  let men_BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  let woman_BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);

  // LEVEL OF ACTIVITY
  function handleActiveMetabolism(dailySteps) {
    dailySteps = dailySteps * 0.04;
    if (activity === "lightly-active") {
      dailyMetabolism = restingMetabolism * 1.2;
      totalMetabolism = dailyMetabolism + dailySteps;
    } else if (activity === "moderately-active") {
      dailyMetabolism = restingMetabolism * 1.4;
      totalMetabolism = dailyMetabolism + dailySteps;
    } else if (activity === "very-active") {
      dailyMetabolism = restingMetabolism * 1.6;
      totalMetabolism = dailyMetabolism + dailySteps;
    } else if (activity === "extra-active") {
      dailyMetabolism = restingMetabolism * 1.8;
      totalMetabolism = dailyMetabolism + dailySteps;
    }
  }

  if (gender === "male") {
    restingMetabolism = men_BMR;
    totalMetabolism = restingMetabolism;
  } else if (gender === "female") {
    restingMetabolism = woman_BMR;
    totalMetabolism = restingMetabolism;
  }

  handleActiveMetabolism(dailySteps);

  return (
    <div className='wrapper'>
      <div className='subpage-title container'>Calorie calculator</div>
      <div className='subtitle'>
        <p>Calculate how many calories you burn</p>
      </div>
      <div className='container'>
        <form>
          <div className='grid-col-4'>
            <div className='grid'>

              <label>Gender:</label>
              <select value={gender} onChange={handleGender}>
                {genderOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

            </div>
            <InputData labelName="Weight:" id="weight" for="weight" value={weight} onChangeHandler={handleWeight} />
            <InputData labelName="Height:" id="height" for="height" value={height} onChangeHandler={handleHeight} />
            <InputData labelName="Age:" id="age" for="age" value={age} onChangeHandler={handleAge} />
          </div>

          <div className='grid-col-4'>
            <OutputBox labelName='Resting metabolism:' result={Math.trunc(restingMetabolism)} />
            <div className='grid'>
              <label>Work performed:</label>
              <select value={activity} onChange={handleActivity}>
                {activityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <OutputBox labelName='Daily metabolism:' result={Math.trunc(dailyMetabolism)} />
            <InputData labelName="Daily steps(km):" id="steps" for="steps" value={dailySteps} onChangeHandler={handleSteps} />
          </div>

          <div className='grid-col-4'>
            <OutputBox labelName='Total metabolism:' result={Math.trunc(totalMetabolism)} />
            <div className='grid'>
              <label className='hidden'>hidden</label>
              <button>Calculate</button>
            </div>
          </div>
          <div className='makro-table'>
            <MacroDemand />
            <MacroDemand />
            <MacroDemand />
          </div>
          <p className='data-info'>All sent data is saved in the system only for communication purposes, this information will never be shared with a third party</p>
        </form >

        <div className='content-info'>
          <h1>CALORIC DEMAND CALCULATOR</h1>
          <p>
            The kcal calculator is a source of knowledge for people looking for a way to lose weight by running or who want to maintain the correct weight of a runner.
            Thanks to it, you can calculate your daily caloric requirement, both on a day without training and on a day when you run a certain number of kilometers.
            It allows you to determine what your resting and daily metabolism are. Depending on the lifestyle and activity, show how your total metabolism looks like.
            The given data allow the simplest way to create a balanced meal based on the calories consumed. Following the basic message during weight loss that the energy balance cannot be positive,
            i.e. we need to eat fewer calories in relation to the amount consumed during the day, our calculator will guide you through how to do it.
          </p>
        </div>
      </div >
      <Footer />
    </div >
  );

}

export default App;
