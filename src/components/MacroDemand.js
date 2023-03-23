import React, { useState } from 'react';

import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

function MacroDemand(props) {

    const [preferenceKcal, setPreferenceKcal] = useState(0);

    const handlePlusBtnClick = (event) => {
        if (preferenceKcal === 8000) {
            setPreferenceKcal(8000);
        } else {
            setPreferenceKcal(prevPreferenceKcal => prevPreferenceKcal + 100);
            props.onPreferenceChange(preferenceKcal + 100);
            btnClicked(event);
        }
    };

    const handleMinusBtnClick = (event) => {
        if (preferenceKcal === -1000) {
            setPreferenceKcal(-1000);
        } else {
            setPreferenceKcal(prevPreferenceKcal => prevPreferenceKcal - 100);
            props.onPreferenceChange(preferenceKcal - 100);
            btnClicked(event);
        }
    };

    const handleResetBtnClick = (event) => {
        setPreferenceKcal(0);
        btnClicked(event);
    };

    const btnClicked = (event) => {
        const btn = event.currentTarget;
        const svg = btn.querySelector('svg');
        svg.style.fontSize = "24px";
        setTimeout(() => {
            svg.style.fontSize = "28px";
        }, 100);

    };
    return (
        <div className='table-container'>

            <div className='table-title'>

                <div>
                    {props.titleName}
                </div>

                <div className='kcal-preference'>
                    {/* PLUS BUTTON */}
                    <button id="plus-btn" className="kcal-btn"
                        onClick={handlePlusBtnClick} >
                        <FaPlusSquare />
                    </button>

                    {/* KCAL OUTPUT */}
                    <div className='table-output'>{preferenceKcal > 0 ? "+" + preferenceKcal : preferenceKcal}</div>

                    {/* MINUS BUTTON */}
                    <button id="minus-btn" className='kcal-btn'
                        onClick={handleMinusBtnClick}>
                        <FaMinusSquare />
                    </button>

                    {/* RESET BUTTON */}
                    <button id="reset" className='kcal-btn reset-btn'
                        onClick={handleResetBtnClick}>
                        <GrPowerReset />
                    </button>
                </div>

            </div>

            <div className='table-section'>
                <div className='table-id'>Calorie</div>
                <div className='table-equation'>{props.totalKcal}</div>
                <div className='table-unit'>kcal</div>
                <div className="hidden"></div>
                <div className='table-unit'>Total</div>
            </div>

            <div className='table-section'>
                <div className='table-id'>Carbo</div>
                <div className='table-equation'>{props.carboKcal}</div>
                <div className='table-unit'>kcal</div>
                <div className='table-equation'>{props.carboGrams}</div>
                <div className='table-unit'>grams</div>
            </div>

            <div className='table-section'>
                <div className='table-id'>Protein</div>
                <div className='table-equation'>{props.proteinKcal}</div>
                <div className='table-unit'>kcal</div>
                <div className='table-equation'>{props.proteinGrams}</div>
                <div className='table-unit'>grams</div>
            </div>

            <div className='table-section'>
                <div className='table-id'>Fat</div>
                <div className='table-equation'>{props.fatKcal}</div>
                <div className='table-unit'>kcal</div>
                <div className='table-equation'>{props.fatGrams}</div>
                <div className='table-unit'>grams</div>
            </div>

        </div>
    );
};

export default MacroDemand;;