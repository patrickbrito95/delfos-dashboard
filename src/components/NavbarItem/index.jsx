import React from 'react';
import Icon from '../Icon';
import './style.css';

export const NavbarItem = ({ iconName, open = false, name, hover = false }) => {
    return (
        <div>
            {!open && !hover ? (
                <div className='wrapper-icon'>
                    <Icon name={iconName} />
                </div>
            ) : (
                <div className='wrapper-icon-named'>
                    <Icon name={iconName} />
                    <div>{name}</div>
                </div>
            )}

        </div>
    )
}