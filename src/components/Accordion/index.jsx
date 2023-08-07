import React, { useState } from 'react';
import './style.css';
import Icon from '../Icon';
import { useMediaQuery } from 'react-responsive';

export const Accordion = ({ title, children, iconName, notification }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1170px)' })

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button className={`accordion-button${isOpen ? '-open' : ''}`} onClick={toggleAccordion}>
                <div className='accordion-div-left'>
                    <div className='wrapper-icon-left'>
                        <Icon color="#8C97A1" name={iconName} />
                    </div>
                    <div className='accordion-notification-box'>
                        {notification}
                    </div>
                    <div className='accordion-title'>
                        {title}
                    </div>
                    {!isTabletOrMobile && (
                        <>
                            <div className='accordion-support-text'>
                                no período selecionado
                            </div>
                        </>
                    )}
                </div>
                <div className='wrapper-icon-right'>
                    <Icon name={`chevron-${isOpen ? 'up' : 'down'}`} />
                </div>
            </button>
            {isOpen ? <div className="accordion-content">{children}</div> : null}
        </div>
    );
};

export default Accordion;