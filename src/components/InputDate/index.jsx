import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import './style.css';
import "react-datepicker/dist/react-datepicker.css";
import Icon from "../Icon";




export const InputDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const datePickerRef = useRef(null);

    const handleInputClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
        }
    };
    return (
        <div className="wrapper-box-calendar" onClick={handleInputClick}>
            <div className="wrapper-icon-calendar">
                <div className="ajust-icon">
                    <Icon name="calendar" />
                </div>
            </div>
            <div>
                <div className='title-text'>
                    Data
                </div>
                <div className="wrapper-datepicker">
                    <DatePicker ref={datePickerRef} className="custom-input" selected={startDate} dateFormat="dd.MM.yyyy" onChange={(date) => setStartDate(date)} />
                    <div className="ajust-icon">
                        <Icon name="chevron-down" />
                    </div>
                </div>
            </div>
        </div>
    );
};