import React from 'react';
import './style.css';
import CustomChart from '../Chart';
import BarAverage from '../BarAverage';
import Icon from '../Icon';


export const RiskCard = () => {
    return (
        <div>
            <div className="wrapper-top-card">
                <div className='risk-summary'>
                    <div className='wrapper-risk-title'>
                        <span>
                            Geração Baixa
                        </span>
                        <button className='wrapper-risk-button'>
                            Ver análise
                        </button>
                    </div>
                    <div className='wrapper-risk-subtitle'>
                        A geração do parque está muito abaixo da meta deste mês
                    </div>
                </div>
                <div className='wrapper-data'>
                    <div className='wrapper-data-top'>
                        <div className='wrapper-current-value'>
                            <span>
                                Valor Atual
                            </span>
                            <div className='wrapper-risk-value'>
                                60.5 Mwh
                            </div>
                        </div>
                        <div className='wrapper-risk-percent'>
                            <div className='percent-number'>
                                <Icon name="trending-down" color="#F42829" />
                                <span>
                                    45%
                                </span>
                            </div>
                            <span className='risk-prev-date'>
                                VS PREV. 30 DIAS
                            </span>
                        </div>
                    </div>
                    <div className='wrapper-bars'>
                        <div className='wrapper-average-bars'>
                            <span>Meta Diária: {45}</span>
                            <BarAverage minValue={45} value={30} />
                        </div>
                        <div className='wrapper-average-bars'>
                            <span>Meta Mensal: {45}</span>
                            <BarAverage minValue={45} value={30} />
                        </div>
                    </div>
                </div>
            </div>



            <div className='wrapper-bottom-card'>
                <div className="risk-available">
                    <div className='wrapper-risk-title'>
                        <span>
                            Disponibilidade
                        </span>
                        <button className='wrapper-risk-button'>
                            Verificar WTGS
                        </button>
                    </div>
                    <div className='wrapper-risk-subtitle'>
                        O parque está tendo muitas quedas de disponibilidade
                    </div>
                </div>
                <div>
                    <CustomChart />
                </div>
            </div>
        </div>
    )
}