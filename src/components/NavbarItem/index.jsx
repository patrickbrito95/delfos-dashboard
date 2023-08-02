import React from 'react';
import Icon from '../Icon';
import './style.css';
import { NotificationPill } from '../NotificationPill';

export const NavbarItem = ({ iconName, open = false, name, hover = false, moreOptions = false, notifications, isActiveRoute, color, isSection = true }) => {

    return (
        <div>
            {!open && !hover ? (
                <div className={'wrapper-icon'}>
                    {isActiveRoute && (
                        <div className='icon-active'>
                        </div>
                    )}
                    <Icon color={color} name={iconName} />
                </div>
            ) : (
                <div className='wrapper-icon-named'>
                    {isActiveRoute && (
                        <div className='icon-named-active'>
                        </div>
                    )}
                    <Icon color={color} name={iconName} />
                    <div>{name}</div>
                    {notifications && (
                        <div className='wrapper-notification-navbar-item'>
                            <NotificationPill notifications={notifications} />
                        </div>
                    )}
                    {isSection && (
                        <div className="wrapper-chevron-icon">
                            <Icon name={`chevron${moreOptions ? '-down' : '-right'}`} />
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}