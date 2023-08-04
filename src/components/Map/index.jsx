import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl, useMap } from 'react-leaflet';
import './style.css';
import 'leaflet/dist/leaflet.css'
import RedMarker from '../../assets/images/marker-red.png';
import GreenMarker from '../../assets/images/marker-green.png';
import YellowMarker from '../../assets/images/marker-yellow.png';
import Icon from '../Icon';
import { CustomPopup } from '../CustomPopup';
import data from '../../api/api.json';


const redMarker = new L.Icon({
    iconUrl: RedMarker,
    iconSize: new L.Point(50, 50)
});

const greenMarker = new L.Icon({
    iconUrl: GreenMarker,
    iconSize: new L.Point(50, 50)
});

const yellowMarker = new L.Icon({
    iconUrl: YellowMarker,
    iconSize: new L.Point(50, 50)
});

console.log(data)

export const Map = () => {

    return (
        <MapContainer attributionControl={false} zoomControl={false} style={{ width: "calc(100vw - 56px)", height: "100vh", position: 'absolute', top: 0, left: 56, right: 0, bottom: 0 }} center={[-3.72239, -38.5034]} zoom={13}>
            <ZoomControl position="bottomleft" />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data?.map((marker) => {
                return (
                    <Marker position={[marker.lat, marker.long]} icon={marker.energy >= 60 ? greenMarker : marker.energy < 60 && marker.energy >= 40 ? yellowMarker : redMarker}>
                        <Popup closeButton={false}>
                            <CustomPopup title={marker.title} power={marker.power} reach={marker.reach} energy={marker.energy} />
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    );
};