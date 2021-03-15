import React from "react";
import "./Locations.css"
import LocationType from "../components/LocationType.js";
import sh1 from "../images/sh1.jpg";
import sh2 from "../images/sh2.jpg";
import sh3 from "../images/sh3.jpg";
import sh4 from "../images/sh4.jpeg";
import sh5 from "../images/sh5.jpeg";
import sh6 from "../images/sh6.jpeg";

function Locations() {

    return (
        <div id="background">
            <h1 id="header">Find A Location Near You</h1>
            <div className="container">
                <div className="row">
                    <LocationType image={sh1} type="Tyler, Tx" alt="SteakHouse" />
                    <LocationType image={sh2} type="Spring, Tx" alt="SteakHouse" />
                    <LocationType image={sh3} type="Beaumont, Tx" alt="SteakHouse" />
                    <LocationType image={sh4} type="Humble, Tx" alt="SteakHouse" />
                    <LocationType image={sh5} type="Houston, Tx" alt="SteakHouse" />
                    <LocationType image={sh6} type="Katy, Tx" alt="SteakHouse" />
                </div>
            </div>
        </div>
    )
}

export default Locations;