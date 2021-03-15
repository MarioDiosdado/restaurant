import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const styles = {
    image: {
        width: "auto",
        height: "300px"
    },
    card: {
        margin: "10px"
    },
    icon: {
        float: "right"
    }
}

function MenuType(props) {
    return (

            <div className="col-sm-12 col-md-6">
                <div className="card bg-dark text-white" style={styles.card}>
                    <img src={props.image} className="card-img-top" alt={props.alt} style={styles.image} />
                    <div className="card-body">
                        <p className="card-text">{props.type}<span style={styles.icon} ><a href="/"><FontAwesomeIcon icon={faChevronCircleRight} size="lg" /></a></span></p>
                    </div>
                </div>
            </div>

    )
}

export default MenuType;