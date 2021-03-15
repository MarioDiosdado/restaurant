import React from "react";
import "./Menu.css"
import MenuType from "../../components/MenuType";
import dinner from "../../images/dinner.jpg";
import lunch from "../../images/lunch.jpg";
import ed from "../../images/early-dinner.jpg";
import dessert from "../../images/dessert.jpg";

function Menu() {

    return (
        <div id="background">
            <h1 id="header">Rare/Medium Rare Or Get Out</h1>
            <div className="container">
                <div className="row">
                    <MenuType image={lunch} type="Lunch" alt="Lunch Menu" />
                    <MenuType image={ed} type="Early Dinner" alt="Early Dinner Menu" />
                    <MenuType image={dinner} type="Dinner" alt="Dinner Menu" />
                    <MenuType image={dessert} type="Dessert" alt="Dessert Menu" />
                </div>
            </div>
        </div>
    )
}

export default Menu;