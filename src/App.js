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

  let restingMetabolism, dailyMetabolism, totalMetabolism, totalMetabolismGain, totalMetabolismLoose;
  let totalCarbo, totalProtein, totalFat, totalCarboInGrams, totalProteinInGrams, totalFatInGrams;
  let totalCarboGain, totalProteinGain, totalFatGain, totalCarboInGramsGain, totalProteinInGramsGain, totalFatInGramsGain;
  let totalCarboLoose, totalProteinLoose, totalFatLoose, totalCarboInGramsLoose, totalProteinInGramsLoose, totalFatInGramsLoose;
  let currentWeight, currentHeight;

  // Calories in macroelemets
  const protein = 4;
  const carbo = 4;
  const fat = 9;

  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState("lightly-active");
  const [dailySteps, setDailySteps] = useState('');
  const [metric, setMetric] = useState(true);

  // Metrics unit
  let lbs = weight * 2.205;
  let feet = height / 30.48;

  function handleGender(event) {
    setGender(event.target.value);
  }

  function handleWeight(event) {
    let num = event.target.value;
    if (num < 0) {
      return false;
    }
    setWeight(event.target.value);
  }

  function handleHeight(event) {
    let num = event.target.value;
    if (num < 0) {
      return false;
    }
    setHeight(event.target.value);
  }

  function handleAge(event) {
    let num = event.target.value;
    if (num < 0) {
      return false;
    }
    setAge(event.target.value);
  }
  function handleActivity(event) {
    setActivity(event.target.value);
  }

  function handleSteps(event) {
    setDailySteps(event.target.value);
  }

  function changeMetric() {
    setMetric(!metric);
  }

  function preventNegativeValue() {
    if (totalMetabolismLoose <= 0 || totalCarboLoose <= 0 || totalProteinLoose <= 0 || totalFatLoose <= 0) {
      totalCarboLoose = 0;
      totalCarboInGramsLoose = 0;
      totalProteinLoose = 0;
      totalProteinInGramsLoose = 0;
      totalFatLoose = 0;
      totalFatInGramsLoose = 0;
      totalMetabolismLoose = 0;
    }
  }

  function inputValueEmpty() {
    if (weight === '' || height === '' || age === '') {
      restingMetabolism = dailyMetabolism = totalMetabolism = totalMetabolismGain = totalMetabolismLoose = 0;
      totalCarbo = totalProtein = totalFat = totalCarboInGrams = totalProteinInGrams = totalFatInGrams = 0;
      totalCarboGain = totalProteinGain = totalFatGain = totalCarboInGramsGain = totalProteinInGramsGain = totalFatInGramsGain = 0;
    }
  }

  // BASAL BMR FOR WOMAN AND MAN
  if (metric === true) {
    currentWeight = weight;
    currentHeight = height;
  } else {
    currentWeight = lbs;
    currentHeight = feet;
  }

  let men_BMR = 88.362 + (13.397 * currentWeight) + (4.799 * currentHeight) - (5.677 * age);
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
    dailyMetabolism = Math.round(dailyMetabolism);
    restingMetabolism = Math.round(restingMetabolism);
    totalMetabolism = Math.round(totalMetabolism);
    totalMetabolismGain = Math.round(totalMetabolism + 300);
    totalMetabolismLoose = Math.round(totalMetabolism - 500);
  }

  function calcMacro() {
    totalCarbo = Math.round((totalMetabolism * 0.5));
    totalCarboInGrams = Math.round(totalCarbo / carbo);

    totalProtein = Math.round((totalMetabolism * 0.25));
    totalProteinInGrams = Math.round(totalProtein / protein);

    totalFat = Math.round((totalMetabolism * 0.25));
    totalFatInGrams = Math.round(totalProtein / fat);

    totalCarboGain = Math.round((totalMetabolismGain * 0.5));
    totalCarboInGramsGain = Math.round(totalCarboGain / carbo);

    totalProteinGain = Math.round((totalMetabolismGain * 0.25));
    totalProteinInGramsGain = Math.round(totalProteinGain / protein);

    totalFatGain = Math.round((totalMetabolismGain * 0.25));
    totalFatInGramsGain = Math.round(totalProteinGain / fat);

    totalCarboLoose = Math.round((totalMetabolismLoose * 0.5));
    totalCarboInGramsLoose = Math.round(totalCarboLoose / carbo);

    totalProteinLoose = Math.round((totalMetabolismLoose * 0.25));
    totalProteinInGramsLoose = Math.round(totalProteinLoose / protein);

    totalFatLoose = Math.round((totalMetabolismLoose * 0.25));
    totalFatInGramsLoose = Math.round(totalProteinLoose / fat);
  }

  if (gender === "male") {
    restingMetabolism = men_BMR;
    totalMetabolism = restingMetabolism;
    handleActiveMetabolism(dailySteps);
    calcMacro();
    inputValueEmpty();
    preventNegativeValue();
  } else if (gender === "female") {
    restingMetabolism = woman_BMR;
    totalMetabolism = restingMetabolism;
    handleActiveMetabolism(dailySteps);
    calcMacro();
    inputValueEmpty();
    preventNegativeValue();
  }


  return (
    <div className='wrapper'>
      <div className='subpage-title container'>Calorie calculator</div>
      <div className='subtitle'>
        <p>Calculate how many calories you burn</p>
      </div>
      <div className='container'>
        <div className="form">
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
            <InputData labelName="Weight:" id="weight" value={weight} onChangeHandler={handleWeight} />
            <InputData labelName="Height:" id="height" value={height} onChangeHandler={handleHeight} />
            <InputData labelName="Age:" id="age" value={age} onChangeHandler={handleAge} />
          </div>

          <div className='grid-col-4'>
            <OutputBox labelName='Resting metabolism:' result={restingMetabolism} />
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
            <OutputBox labelName='Daily metabolism:' result={dailyMetabolism} />
            <InputData labelName="Daily steps(km):" id="steps" value={dailySteps} onChangeHandler={handleSteps} />
          </div>

          <div className='grid-col-4'>
            <OutputBox labelName='Total metabolism:' result={totalMetabolism} />
            <div className='grid'>
              <label className='hidden'>hidden</label>
              <button onClick={changeMetric}>{metric ? "lb / ft" : "kg / cm"}</button>
            </div>
          </div>
          <div className='makro-table'>
            <MacroDemand
              titleName="Gain weight"
              totalKcal={totalMetabolismGain}
              carboKcal={totalCarboGain}
              carboGrams={totalCarboInGramsGain}
              proteinKcal={totalProteinGain}
              proteinGrams={totalProteinInGramsGain}
              fatKcal={totalFatGain}
              fatGrams={totalFatInGramsGain} />
            <MacroDemand titleName="Keep weight"
              totalKcal={totalMetabolism}
              carboKcal={totalCarbo}
              carboGrams={totalCarboInGrams}
              proteinKcal={totalProtein}
              proteinGrams={totalProteinInGrams}
              fatKcal={totalFat}
              fatGrams={totalFatInGrams} />
            <MacroDemand titleName="Loose weight"
              totalKcal={totalMetabolismLoose}
              carboKcal={totalCarboLoose}
              carboGrams={totalCarboInGramsLoose}
              proteinKcal={totalProteinLoose}
              proteinGrams={totalProteinInGramsLoose}
              fatKcal={totalFatLoose}
              fatGrams={totalFatInGramsLoose} />
          </div>
          <p className='data-info'>All sent data is saved in the system only for communication purposes, this information will never be shared with a third party</p>
        </div >

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
