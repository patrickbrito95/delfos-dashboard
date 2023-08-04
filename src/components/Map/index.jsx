import React from 'react';
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet';
import './style.css';
import 'leaflet/dist/leaflet.css'


export const Map = () => {

    return (
        <MapContainer zoomControl={false} style={{ width: "100%", height: "calc(100vh - 4rem)", position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} center={[-3.71839, -38.5434]} zoom={13}>
            <ZoomControl position="bottomleft" />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    );
};