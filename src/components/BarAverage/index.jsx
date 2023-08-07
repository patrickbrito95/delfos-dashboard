import React from 'react';
import './style.css';

const BarWithMinValue = ({ value, minValue }) => {
    // Calcula a porcentagem do preenchimento da barra horizontal
    const fillPercentage = `${value}%`;

    // Calcula a posição da linha vertical balizadora
    const linePosition = `${minValue}%`;

    // Estilo para a barra preenchida horizontalmente
    const fillStyle = {
        width: fillPercentage,
    };

    // Estilo para a linha vertical balizadora
    const lineStyle = {
        left: linePosition,
    };

    return (
        <div className="bar-with-min-value">
            {/* Barra preenchida horizontalmente */}
            <div className="bar-fill" style={fillStyle}></div>

            {/* Linha vertical balizadora */}
            <div className="min-value-line" style={lineStyle}></div>
        </div>
    );
};

export default BarWithMinValue;