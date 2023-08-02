import React from 'react';
import './style.css';


export const NotificationPill = ({ notifications }) => {
    return (
        <div className='pill'>
            {notifications}
        </div>
    )
}