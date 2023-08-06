import React from 'react';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Map } from '../../components/Map';
import { CardStatus } from '../../components/CardStatus';
import './style.css';
import Icon from '../../components/Icon';

export const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='dashboard-children'>
                <Map />
                <div className='card-status'>
                    <CardStatus
                        title="Parque Ventos do Agreste"
                        iconAvaliation={<Icon name="avaliation" />}
                        current={48}
                        total={60}
                        windSpeed={3.9}
                        newOccurrences={44}
                    />
                </div>
                <div className='card-accordion'>
                    TESTE
                </div>
            </div>
        </div>
    )
}