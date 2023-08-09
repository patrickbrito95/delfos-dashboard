import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import { useNavBarContext } from '../../context/NavBarContext';
import Icon from '../Icon';

export const NavbarItemSubsection = ({ name, children, iconName, isOpen, isActive, color }) => {
    const [expanded, setExpanded] = useState(false);
    const { isNavBarOpen } = useNavBarContext();
    const accordionRef = useRef(null);

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    const handleClickOutside = (event) => {
        if (accordionRef.current && !accordionRef.current.contains(event.target)) {
            setExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={accordionRef} className="accordion">
            {isActive && (
                <div className='accordion-icon-active'>
                </div>
            )}
            <div className="accordion-header" onClick={toggleAccordion}>
                <Icon color={color} name={iconName} />
                {isOpen && (
                    <div className="accordion-title">{name}</div>
                )}
                <div className={`accordion-icon ${expanded ? 'expanded' : ''}`}>
                    {isOpen ? (
                        <div className='accordion-chevron-icon'>
                            <Icon name={`chevron-${expanded ? 'down' : 'right'}`} />
                        </div>
                    ) : null}
                </div>
            </div>
            {isNavBarOpen ? (
                expanded && <div className="accordion-content">{children}</div>
            ) : null}
        </div>
    );
};
