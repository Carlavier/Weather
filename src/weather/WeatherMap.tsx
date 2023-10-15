import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { coordinate } from "./Home";

function WeatherMap({ coord: {lat, lon} }: Props) {
    return(
        <div style={{}}>
            <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lon]} />
            </MapContainer>
        </div>
    );
}

export default WeatherMap;

interface Props {
    coord: coordinate,
}