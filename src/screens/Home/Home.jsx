import React from 'react';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Map } from '../../components/Map';
import './style.css';

export const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='dashboard-children'>
                <Map />
                <div className='teste'>
                    ALKJHSDAKLJDS
                </div>
            </div>
        </div>
    )
}