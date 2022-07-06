import React from 'react';

import './App.css';
import './MediaQuerys.css';
import InputData from './components/InputData';
import Footer from './components/Footer';
import SelectData from './components/SelectData';
import OutputBox from './components/OutoputBox';




function App() {
  return (
    <div className='wrapper'>
      <div className='subpage-title container'>Calorie calculator</div>
      <div className='subtitle'>
        <p>Calculate how many calories you burn</p>
      </div>
      <div className='container'>
        <form>
          <div className='grid-col-4'>
            <SelectData id='gender' for='gender' />
            <InputData labelName="Weight:" id="weight" for="weight" />
            <InputData labelName="Height:" id="height" for="height" />
            <InputData labelName="Age:" id="age" for="age" />
          </div>
          <div className='grid-col-4'>
            <OutputBox labelName='Resting metabolism:' />
            <SelectData id='gender' for='gender' />
            <OutputBox labelName='Daily metabolism:' />
            <InputData labelName="Daily steps(km):" id="steps" for="steps" />
          </div>
          <div className='grid-col-4'>
            <OutputBox labelName='Total metabolism:' />
            <div className='grid'>
              <label className='hidden'>hidden</label>
              <button>Calculate</button>
            </div>
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
