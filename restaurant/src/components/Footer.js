import React from "react";


const styles = {
    foot: {
        background: "#BF0000",
        color: "white"
    }
}

const styles2 = {
    link: {
        color: "white"
    }
}

function Footer() {
    return <div >
        <div className="card text-center" style={styles.foot}>

            <div className="card-header">
                <div className="container">
                    <ul className="nav nav-pills card-header-pills"> 
                        <li className="nav-item">
                            <a className="nav-link" style={styles2.link}  href="/">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={styles2.link} href="/">NEWSROOM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={styles2.link} href="/">GIFT CARD</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
}

export default Footer;