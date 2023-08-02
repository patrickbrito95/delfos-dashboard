import React from 'react';
import './style.css';
import Icon from '../Icon';
import { InputDate } from '../InputDate';


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
                    <div>
                        <InputDate />
                    </div>
                </div>
            </div>
            <div className="header-right">
                <div className="portifolio-box">
                    <div className="title-text">
                        <span>
                            Visualizando
                        </span>
                    </div>
                    <div className="portifolio">
                        <div className="portifolio-text">
                            Portifólio
                        </div>
                        <Icon name="chevron-right" />
                    </div>
                </div>
                <div className='region-tag'>
                    Parque Ventos do Agreste
                    <div className='icon-tags'>
                        <Icon name="selector" color="#FF7005" />
                        <Icon name="x-mark" color="#FF7005" />
                    </div>
                </div>
            </div>
        </div>
    )
}