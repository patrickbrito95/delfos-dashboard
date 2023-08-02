import React, { useState } from 'react';
import './style.css';
import { NavbarItem } from '../NavbarItem';

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleOpenNavbar = () => {
        setOpen(true);
    }



    return (
        <div className={`navbar${hover ? "-opener" : open ? "-fixed" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div onClick={handleOpenNavbar}>
                <div className={`${hover || open ? 'wrapper-close' : "wrapper-close-transparent"}`}>
                    <NavbarItem open={open} hover={hover} name="Fechar menu" iconName="menu" />
                </div>
                <NavbarItem open={open} hover={hover} name="Highlights" iconName="map" />
                <NavbarItem open={open} hover={hover} name="Ocorrências" iconName="speakerphone" />
                <NavbarItem open={open} hover={hover} name="Performance" iconName="chart-bar" />
                <NavbarItem open={open} hover={hover} name="Energy Losses" iconName="trending-down" />
                <NavbarItem open={open} hover={hover} name="Análises" iconName="beaker" />
                <NavbarItem open={open} hover={hover} name="Relatórios" iconName="clipboard-list" />
            </div>
            <div>
                <NavbarItem open={open} hover={hover} name="Configurações" iconName="cog" />
                <NavbarItem open={open} hover={hover} name="Sair da Conta" iconName="logout" />
                <div className={`ecopower-navbar-item-${hover || open ? "open" : "closed"}`}>
                    <NavbarItem open={open} hover={hover} name="EcoPower Monitor" iconName="eco-power" />
                </div>
            </div>
        </div>
    )
}