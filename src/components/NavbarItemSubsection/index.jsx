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
        <div ref={accordionRef} className="subsection-item">
            {isActive && (
                <div className='subsection-item-icon-active'>
                </div>
            )}
            <div className="subsection-item-header" onClick={toggleAccordion}>
                <Icon color={color} name={iconName} />
                {isOpen && (
                    <div className="subsection-item-title">{name}</div>
                )}
                <div className={`subsection-item-icon ${expanded ? 'expanded' : ''}`}>
                    {isOpen ? (
                        <div className='subsection-item-chevron-icon'>
                            <Icon name={`chevron-${expanded ? 'down' : 'right'}`} />
                        </div>
                    ) : null}
                </div>
            </div>
            {isNavBarOpen ? (
                expanded && <div className="subsection-item-content">{children}</div>
            ) : null}
        </div>
    );
};
