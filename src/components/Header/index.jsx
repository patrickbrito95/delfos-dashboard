import React, { useState } from 'react';
import './style.css';
import Icon from '../Icon';
import { InputDate } from '../InputDate';
import { useMediaQuery } from 'react-responsive';


export const Header = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 835px)' })
    const [openMoreOptions, setOpenMoreOptions] = useState(false)

    return (
        <div className="header">
            <div className="header-left">
                <div className="wrapper-title">
                    <h3>
                        Highlights
                    </h3>
                    <div className="real-time">
                        <div class="real-time-dot"></div>
                        Real Time
                    </div>
                </div>
                {!isTabletOrMobile && (
                    <div className="calender">
                        <div>
                            <InputDate />
                        </div>
                    </div>
                )}
            </div>
            {!isTabletOrMobile && (
                <div className="header-right">
                    <div className="portifolio-box">
                        <div className="title-text">
                            <span>
                                Visualizando
                            </span>
                        </div>
                        <div className="portifolio">
                            <div className="portifolio-text">
                                Portifólio
                            </div>
                            <Icon name="chevron-right" />
                        </div>
                    </div>
                    <div className='region-tag'>
                        Parque Ventos do Agreste
                        <div className='icon-tags'>
                            <Icon name="selector" color="#FF7005" />
                            <Icon name="x-mark" color="#FF7005" />
                        </div>
                    </div>
                </div>
            )}
            {isTabletOrMobile && (
                <>
                    <div onClick={() => setOpenMoreOptions(!openMoreOptions)} className='icon-more-options'>
                        <Icon name="more-options" />
                    </div>
                    {openMoreOptions ? (
                        <div className='dropdown'>
                            <div>
                                <InputDate />
                            </div>
                            <div>
                                <div className="portifolio-box">
                                    <div className="title-text">
                                        <span>
                                            Visualizando
                                        </span>
                                    </div>
                                    <div className="portifolio">
                                        <div className="portifolio-text">
                                            Portifólio
                                        </div>
                                        <Icon name="chevron-right" />
                                    </div>
                                </div>
                                <div className='region-tag'>
                                    <span>
                                        Parque Ventos do Agreste
                                    </span>
                                    <div className='icon-tags'>
                                        <Icon name="selector" color="#FF7005" />
                                        <Icon name="x-mark" color="#FF7005" />
                                    </div>
                                </div>
                            </div>
                        </div>) : null}
                </>
            )}
        </div>
    )
}