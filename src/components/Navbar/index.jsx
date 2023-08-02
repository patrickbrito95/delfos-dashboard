import React, { useState } from 'react';
import './style.css';
import { NavbarItem } from '../NavbarItem';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleOpenNavbar = () => {
        // Abrir o navbar somente se o hover for falso
        if (!hover) {
            setOpen(true);
        }
    };

    const isActiveRoute = location.pathname === `/${name.toLowerCase()}`;

    console.log(isActiveRoute)

    return (
        <div
            className={`navbar${hover ? "-opener" : open ? "-fixed" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                onClick={handleOpenNavbar}
                className="wrapper-hover-control"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div onClick={() => setHover(false)} className={`${hover || open ? 'wrapper-close' : "wrapper-close-transparent"}`}>
                    <NavbarItem open={open} hover={hover} name="Fechar menu" iconName="menu" />
                </div>
                <NavbarItem isActiveRoute={location.pathname === `/highlights`} open={open} hover={hover} name="Highlights" iconName="map" location={location} />
                <NavbarItem open={open} hover={hover} name="Ocorrências" iconName="speakerphone" location={location} />
                <NavbarItem open={open} hover={hover} name="Performance" iconName="chart-bar" notifications={22} location={location} />
                <NavbarItem open={open} hover={hover} name="Energy Losses" iconName="trending-down" notifications={25} location={location} />
                <NavbarItem open={open} hover={hover} name="Análises" iconName="beaker" location={location} />
                <NavbarItem open={open} hover={hover} name="Relatórios" iconName="clipboard-list" location={location} />
            </div>
            <div>
                <NavbarItem open={open} hover={hover} name="Configurações" iconName="cog" />
                <NavbarItem open={open} hover={hover} name="Sair da Conta" iconName="logout" />
                <div className={`ecopower-navbar-item-${hover || open ? "open" : "closed"}`}>
                    <NavbarItem open={open} hover={hover} name="EcoPower Monitor" iconName="eco-power" />
                </div>
            </div>
        </div>
    );
};
