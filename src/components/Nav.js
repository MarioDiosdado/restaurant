import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css"

const styles = {
    nav: {
        background: "#BF0000",
        color: "white",
        padding: "0px",
        height: "80px",
    }
}

function navBar() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={styles.nav}>
            {/* This is the logo */}
            <a className="navbar-brand" href="/">
                <img src={process.env.PUBLIC_URL + '/images/logonew.jpg'} width="207" height="80" class="d-inline-block align-top" alt=""></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup" style={styles.navItems}>
                <div className="navbar-nav mynav navItems">
                    {/*Link to the menu page*/}
                    <Link className="nav-item nav-link" to="/menu">
                        MENU <span className="sr-only">(current)</span>
                    </Link>
                    <Link className="nav-item nav-link" to="/">
                        LOCATIONS
                    </Link>
                    <Link className="nav-item nav-link" to="/">
                        CATERING
                    </Link>
                    <Link className="nav-item nav-link" to="/">
                        MERCH
                    </Link>
                    <Link className="nav-item nav-link" to="/">
                        CATERING
                    </Link>
                    <Link className="nav-item nav-link" to="/">
                        CAREERS
                    </Link>
                </div>
            </div>
            {/* This is the order button */}
            <form class="form-inline my-2 my-lg-0">
            <a href="/">
                <img src={process.env.PUBLIC_URL + '/images/order.jpg'} width="207" height="80" class="d-inline-block align-top" alt=""></img>
                </a>
            </form>
        </nav>
    </div>
}

export default navBar;