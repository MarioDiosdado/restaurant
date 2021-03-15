import React from "react";

const styles = {
    image: {
        width: "auto",
        height: "300px"
    },
    card: {
        margin: "10px"
    }
}

function MenuType(props) {
    return (

            <div className="col-sm-12 col-md-6">
                <div className="card bg-dark text-white" style={styles.card}>
                    <img src={props.image} className="card-img-top" alt={props.alt} style={styles.image} />
                    <div className="card-body">
                        <p className="card-text">{props.type}</p>
                    </div>
                </div>
            </div>

    )
}

export default MenuType;