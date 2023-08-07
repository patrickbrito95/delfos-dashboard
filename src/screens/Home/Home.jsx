import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Map } from '../../components/Map';
import { CardStatus } from '../../components/CardStatus';
import './style.css';
import Icon from '../../components/Icon';
import Accordion from '../../components/Accordion';
import { Title } from '../../components/Title';
import { useMediaQuery } from 'react-responsive';

export const Home = () => {
    const isExpandEvents = useMediaQuery({ query: '(max-width: 835px)' })
    const isExpandFullScreen = useMediaQuery({ query: '(max-width: 1170px)' })
    const [isOpen, setIsOpen] = useState(false)

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
                <div className={`card-accordion${isOpen ? '-open' : ''}`}>
                    <div className='wrapper-title'>
                        {isExpandEvents ? (
                            <div className='wrapper-expand-events'>
                                <button onClick={() => setIsOpen(!isOpen)} className='button-expand'>
                                    <Icon name={isOpen ? "compress-arrows" : "expand-arrows"} />
                                </button>
                            </div>
                        ) : (
                            <div className='wrapper-title-compress-button'>
                                <Title text="Eventos em destaque que ocorreram no período selecionado:" />
                                {isOpen && (
                                    <div className='wrapper-compress-button'>
                                        <button onClick={() => setIsOpen(!isOpen)}>
                                            <Icon name="compress-arrows" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div onClick={() => { isExpandFullScreen && setIsOpen(true) }} className='wrapper-accordion'>
                        <Accordion iconName="exclamation" title="Riscos" notification="09">
                            TESTE 1
                        </Accordion>
                    </div>
                    <div onClick={() => { isExpandFullScreen && setIsOpen(true) }} className='wrapper-accordion'>
                        <Accordion iconName="hand" title="Alertas Preditivos" notification="15">
                            TESTE 2
                        </Accordion>
                    </div>
                    <div onClick={() => { isExpandFullScreen && setIsOpen(true) }} className='wrapper-accordion'>
                        <Accordion iconName="speakerphone" title="Novas Ocorrências" notification="23">
                            TESTE 3
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}