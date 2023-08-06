import React from 'react';
import './style.css';
import Icon from '../Icon';
import { useMediaQuery } from 'react-responsive';

export const CardStatus = ({ title, iconAvaliation, current, total, newOccurrences, windSpeed }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 690px)' })

    return (
        <div className="wrapper-card-status">
            <div className='card-info-top'>
                <div className='card-title'>
                    {title}
                </div>
                <div className='general-status'>
                    <div className='avaliation-status'>
                        {iconAvaliation}
                        <span className='avaliation-text'>Avaliação</span>
                    </div>
                    <div className='devices-available'>
                        <div className="current-devices">
                            <strong>{current}</strong><span>/{total}</span>
                        </div>
                        <span className='devices-text'>Devices</span>
                    </div>
                    <div className='wind-speed'>
                        <div>
                            <strong>{windSpeed}</strong>
                            <Icon name="arrow-up" />
                        </div>
                        <span>Vento (m/s)</span>
                    </div>
                    <div className='new-occurences'>
                        <strong>{newOccurrences}</strong>
                        <span>Novas Ocorrências</span>
                    </div>
                </div>
            </div>
            <div className='card-info-bottom'>
                <div className='no-signal-box'>
                    <div className='number-box' style={{ background: "#E5E9EE" }}>02</div>
                    Sem sinal
                    <div className="ajust-chevron-icon">
                        <Icon name="chevron-right" />
                    </div>
                </div>
                <div className="stoped-box">
                    <div className='number-box' style={{ background: "#F53E3E", color: "#ffffff" }}>03</div>
                    Parado
                    <div className='ajust-chevron-icon'>
                        <Icon name="chevron-right" />
                    </div>
                </div>
                <div className='corrective-box'>
                    <div className='number-box' style={{ background: "#FFC599", color: "#0B1C2C" }}>19</div>
                    M. Corretiva
                    <div className='ajust-chevron-icon'>
                        <Icon name="chevron-right" />
                    </div>
                </div>
                <div className='alarm-box'>
                    <div className='number-box' style={{ background: "#FFDE54", color: "#0B1C2C" }}>08</div>
                    Alarme
                    <div className='ajust-chevron-icon'>
                        <Icon name="chevron-right" />
                    </div>
                </div>
            </div>
        </div>
    )
}