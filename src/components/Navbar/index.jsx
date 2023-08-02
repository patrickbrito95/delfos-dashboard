import React, { useState } from 'react';
import './style.css';
import { NavbarItem } from '../NavbarItem';
import { Link, useLocation } from 'react-router-dom';

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
                    <NavbarItem open={open} hover={hover} name="Fechar menu" iconName="menu" isSection={false} />
                </div>
                <Link className='custom-link' to="/">
                    <NavbarItem color={location.pathname === "/" ? "#FF7D1A" : "#000000"} isActiveRoute={location.pathname === `/`} open={open} hover={hover} name="Highlights" iconName="map" location={location} />
                </Link>
                <Link className='custom-link' to="/ocorrencias">
                    <NavbarItem color={location.pathname === "/ocorrencias" ? "#FF7D1A" : "#000000"} isActiveRoute={location.pathname === `/ocorrencias`} open={open} hover={hover} name="Ocorrências" iconName="speakerphone" location={location} />
                </Link>
                <Link className='custom-link' to="/performance">
                    <NavbarItem color={location.pathname === "/performance" ? "#FF7D1A" : "#000000"} isActiveRoute={location.pathname === `/performance`} open={open} hover={hover} name="Performance" iconName="chart-bar" notifications={22} location={location} />
                </Link>
                <Link className='custom-link' to="/energy-losses">
                    <NavbarItem color={location.pathname === "/energy-losses" ? "#FF7D1A" : "#000000"} isActiveRoute={location.pathname === `/energy-losses`} open={open} hover={hover} name="Energy Losses" iconName="trending-down" notifications={25} location={location} />
                </Link>
                <Link className='custom-link' to="/analises">
                    <NavbarItem color={location.pathname === "/analises" ? "#FF7D1A" : "#000000"} isActiveRoute={location.pathname === `/analises`} open={open} hover={hover} name="Análises" iconName="beaker" location={location} />
                </Link>
                <Link className='custom-link' to="/relatorios">
                    <NavbarItem color={location.pathname === "/relatorios" ? "#FF7D1A" : "#000000"} isActiveRoute={location.pathname === `/relatorios`} open={open} hover={hover} name="Relatórios" iconName="clipboard-list" location={location} />
                </Link>
            </div>
            <div>
                <Link className='custom-link' to="/config">
                    <NavbarItem color={location.pathname === "/config" ? "#FF7D1A" : "#000000"} isActiveRoute={location.pathname === `/config`} open={open} hover={hover} name="Configurações" iconName="cog" />
                </Link>
                <NavbarItem open={open} hover={hover} name="Sair da Conta" iconName="logout" />
                <div className={`ecopower-navbar-item-${hover || open ? "open" : "closed"}`}>
                    <NavbarItem open={open} hover={hover} name="EcoPower Monitor" iconName="eco-power" isSection={false} />
                </div>
            </div>
        </div>
    );
};
