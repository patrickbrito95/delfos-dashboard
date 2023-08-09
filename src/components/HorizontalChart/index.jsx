import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
    const data = [
        { name: 'Operando', percentage: 96, color: '#17D79B' },
        { name: 'Sem sinal', percentage: 0, color: '#ECEDEF' },
        { name: 'Alarme', percentage: 50, color: '#E6C84C' },
        { name: 'Parado', percentage: 40, color: '#F42829' },
        { name: 'Outros', percentage: 40, color: '#FF7005' },
        { name: 'M. Preventiva', percentage: 35, color: '#1B49E0' },
        { name: 'M. Corretiva', percentage: 35, color: '#FFC599' },
        { name: 'Ambiental', percentage: 20, color: '#CC5801' }
    ];

    const options = {
        chart: {
            type: 'bar'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: data.map(item => item.name),
            labels: {
                style: {
                    color: "#615E69",
                    fontFamily: "Inter",
                    fontSize: "14px",
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
            bar: {
                dataLabels: {
                    enabled: true,
                    align: 'right',
                    color: '#000000',
                    style: {
                        fontSize: '14px',
                        textAlign: 'right',
                        paddingRight: '10px'
                    },
                    formatter: function () {
                        return this.y + '%';
                    }
                },
            }
        },
        series: [{
            name: '',
            data: data.map(item => ({
                y: item.percentage,
                color: item.color
            }))
        }],
        tooltip: {
            formatter: function () {
                return this.series.name + '<br>' + this.point.category + ': ' + this.y + '%';
            }
        }
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default BarChart;
