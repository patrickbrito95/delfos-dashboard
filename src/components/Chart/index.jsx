import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Função para gerar valores aleatórios para as barras
const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 6; i++) {
        data.push(Math.floor(Math.random() * 10) + 1);
    }
    return data;
};

// Dados para as barras
const barData = generateRandomData();

const lineValue = 7;

const dashedLineData = [5, 5, 5, 5, 5, 5];

const options = {
    chart: {
        type: 'column',
    },
    title: {
        text: null,
    },
    legend: {
        enabled: false,
    },
    xAxis: {
        categories: ['00h - 03h', '04h - 07h', '08h - 12h', '13h - 16h', '17h - 20h', 'Agora'],
    },
    yAxis: {
        title: {
            text: null,
        },
        gridLineWidth: 0,
        labels: {
            enabled: false,
        },
        plotLines: [
            {
                value: lineValue,
                color: '#000',
                width: 1,
                dashStyle: 'line',
                zIndex: 5,
            },
            {
                value: (lineValue - 1),
                color: '#000',
                width: 1,
                dashStyle: 'Dash',
                zIndex: 5,
            },
        ],
    },
    credits: {
        enabled: false,
    },
    plotOptions: {
        column: {
            colorByPoint: true,
            colors: barData.map((value) => (value > lineValue ? '#ECEDEF' : '#F42829')), // Barras azuis se maior que a linha reta, senão vermelhas
        },
    },
    series: [
        {
            name: 'Bar Series',
            data: barData,
        },
    ],
};

const chartStyle = {
    height: '150px',
};

const CustomChart = () => {
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: chartStyle }} />
        </div>
    );
};

export default CustomChart;
