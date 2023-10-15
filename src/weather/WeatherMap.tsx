import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import L from 'leaflet';

import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { coordinate } from "./Home";

function WeatherMap({ coord: {lat, lon} }: Props) {
    const mapIcon = L.icon({
        iconUrl: markerIconPng,
        iconSize: [25, 41], 
        iconAnchor: [12, 41],
    })

    return(
        <div style={{}}>
            <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lon]} icon={mapIcon}/>
            </MapContainer>
        </div>
    );
}

export default WeatherMap;

interface Props {
    coord: coordinate,
}