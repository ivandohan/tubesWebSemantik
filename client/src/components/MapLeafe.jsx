import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import Ratio from "react-bootstrap/Ratio"


const MapLeafe = () => {
    const pos = [37.1239, -82.6078]

    return (
        <div style={{width: 800, height: "auto"}}>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='Ivandohan'
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            Ivandohan
                        </Popup>
                    </Marker>
                </MapContainer>
        </div>
    )
}

export default MapLeafe
