import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const StackedColumnChart = () => {
    const options = {
        chart: {
            type: 'bar'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Asset name', 'Asset name', 'Asset name', 'Asset name', 'Asset name', 'Asset name', 'Asset name', 'Asset name', 'Asset name', 'Asset name'],
            labels: {
                style: {
                    color: "#615E69",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                },
                lineWidth: 0
            }
        },
        yAxis: {
            visible: false
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [
            {
                name: 'Periodo 1',
                data: [4, 4, 6, 15, 12, 5, 3, 12, 6, 11],
                color: '#FFC599'
            },
            {
                name: 'Periodo 2',
                data: [5, 3, 12, 6, 11, 4, 4, 6, 15, 12],
                color: '#FF7005'
            },
            {
                name: 'Periodo 3',
                data: [5, 15, 8, 5, 8, 5, 8, 5, 15, 10],
                color: '#F42829'
            },
            {
                name: 'Periodo 4',
                data: [5, 15, 8, 5, 8, 5, 15, 8, 5, 8],
                color: '#E6C84C'
            }
        ]
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default StackedColumnChart;
