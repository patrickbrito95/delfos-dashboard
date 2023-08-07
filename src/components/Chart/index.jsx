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
        type: 'column', // Tipo de gráfico de barras
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
            enabled: false, // Remover os números do eixo y
        },
        plotLines: [
            {
                value: lineValue, // Valor da linha reta
                color: '#000', // Cor da linha reta
                width: 1, // Espessura da linha reta
                dashStyle: 'line', // Estilo tracejado para a linha reta
                zIndex: 5,
            },
            {
                value: (lineValue - 1), // Valor da linha tracejada
                color: '#000', // Cor da linha tracejada
                width: 1, // Espessura da linha tracejada
                dashStyle: 'Dash', // Estilo tracejado para a linha tracejada
                zIndex: 5, // Z-index para colocar a linha tracejada acima das barras
            },
        ],
    },
    credits: {
        enabled: false, // Remover o link do Highcharts
    },
    plotOptions: {
        column: {
            colorByPoint: true, // Definir cores personalizadas para as barras
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
