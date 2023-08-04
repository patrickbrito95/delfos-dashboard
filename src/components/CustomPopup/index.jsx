import React from 'react';
import Icon from '../Icon';
import './style.css';

export const CustomPopup = ({ title, power, reach, energy }) => {
    return (
        <>
            <span className='custom-popup-title'>{title}</span>
            <div>
                <div className='custom-popup-middle-info'>
                    <div className="wrapper-turbine-info">
                        <Icon name="mini-turbine" />
                        {power}
                    </div>
                    <div className='wrapper-speaker-info'>
                        <Icon name="mini-speaker" />
                        {reach}
                    </div>
                </div>
                <div className='custom-popup-bottom-info'>
                    <div className='wrapper-bolt-info'>
                        <Icon name="mini-bolt" />
                        {energy}% MWh
                    </div>
                </div>
            </div>
        </>
    )
}