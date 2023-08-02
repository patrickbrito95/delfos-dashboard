import React from 'react';
import './style.css';
import Icon from '../Icon';
import { BeakerIcon } from '@heroicons/react/24/solid'


export const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <div className="wrapper-title">
                    <h3>
                        Highlights
                    </h3>
                    <div className="real-time">
                        <div class="real-time-dot"></div>
                        Real Time
                    </div>
                </div>
                <div className="calender">
                    <Icon name="calendar" />
                    <div className='title-text'>
                        Data
                    </div>
                    <div>
                        <input type='date' />
                    </div>
                </div>
            </div>
            <div className="header-right">
                <div className="portifolio-box">
                    <div className="title-text">
                        Visualizando
                    </div>
                    <div className="portifolio">
                        Portifólio
                    </div>
                </div>
                <div className='region-tag'>
                    Parque Ventos do Agreste
                </div>
            </div>
        </div>
    )
}