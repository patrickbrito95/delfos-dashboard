import React, { useState } from 'react';
import './style.css';
import dataFake from '../../api/fakedata.json';
import Icon from '../Icon';

export const PredictiveAlertsCard = () => {
    const [data,] = useState(dataFake);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: '' });

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = () => {
        if (sortConfig.key !== null) {
            return [...data].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return data;
    };

    const renderTableHeader = () => {
        const headers = ['ID', 'Status Origem', 'Alarme', 'Asset Type', 'Asset', 'Origem Sistema', 'Resp', 'Aprovado', 'Ações'];

        return (
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>
                        <div className='th'>
                            {header}
                            {header === 'ID' || header === 'Alarme' || header === 'Asset Type' || header === 'Resp' || header === 'Origem Sistema' ? (
                                <div>
                                    <button className="button-selector" onClick={() => requestSort(header)}><Icon name="selector" color="#77757F" /></button>
                                </div>
                            ) : null}
                        </div>
                    </th>
                ))}
            </tr>
        );
    };

    const renderTableData = () => {
        const sorted = sortedData();

        return sorted.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>
                    <div className='td'>
                        {item.ID}
                    </div>
                </td>
                <td>
                    <div className='td'>
                        <Icon name="SCADA" />
                        {item.StatusOrigem === "Status 1" ? <div className='bullet-green' /> : item.StatusOrigem === "Status 2" ? <div className='bullet-yellow' /> : <div className='bullet-red' />}
                    </div>
                </td>
                <td>
                    <div className='td' style={{ color: "#000000" }}>
                        {item.Alarme}
                    </div>
                </td>
                <td>
                    <div className='td'>
                        {item.AssetType}
                    </div>
                </td>
                <td>
                    <div className='td'>
                        {item.Asset}
                    </div>
                </td>
                <td>
                    <div className='td'>
                        {item.OrigemSistema}
                    </div>
                </td>
                <td>
                    <div className='td'>
                        {item.Resp}
                    </div>
                </td>
                <td>
                    <div className='td'>
                        <label class="custom-checkbox">
                            <input type="checkbox" checked={item.Aprovado} />
                            <span class="checkmark"></span>
                            <span class="icon-checked"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 12" fill="none">
                                <path d="M4.1665 10.8334L7.49984 14.1667L15.8332 5.83337" stroke="#F9F9F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></span>
                        </label>
                    </div>
                </td>
                <td>
                    <div className='td'>
                        <button className='button-actions'>
                            <Icon name="chevron-down" />
                        </button>
                    </div>
                </td>
            </tr >
        ));
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    {renderTableHeader()}
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    );
};