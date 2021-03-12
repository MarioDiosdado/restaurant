import React from "react";
import "../style/button.css"

function Button(props) {
    const label = props.label;
    const btnClass = props.btnClass;
    return <div>
        <button type="button" className={`btn btn-danger btn-lg btn-responsive btn-background-slide ${btnClass}`} style={{ fontFamily: `'Playfair Display', serif` }}>{label}</button>
    </div>
}

export default Button;

