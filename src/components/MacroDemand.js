import React from 'react';

function MacroDemand(props) {
    return (
        <div className='grid'>

            <div className='table-title'>{props.titleName}</div>

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
}

export default MacroDemand;;