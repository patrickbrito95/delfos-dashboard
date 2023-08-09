import React from 'react';
import './style.css';
import HorizontalChart from '../HorizontalChart';
import StackedColumnChart from '../StackedColumnChart';

export const NewOccurrencesCard = () => {
    return (
        <div className='wrapper-charts'>
            <div className="wrapper-left-chart">
                <div className='title-newocurrencies'>Alarmes Mais Acionados</div>
                <HorizontalChart />
            </div>
            <div className='wrapper-right-chart'>
                <div className='title-newocurrencies'>Assets com maiores downtimes</div>
                <StackedColumnChart />
            </div>
        </div>
    )
}