import React from "react";
// import logo from "../../public/images/logo.png"
const styles = {
    nav: {
        background: "#BF0000",
        color: "white",
        paddingTop: "0px"
    }
}

function navBar() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark " style={styles.nav}>
            <a className="navbar-brand" href="/">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} width="180" height="70" class="d-inline-block align-top" alt=""></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">MENU <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/">LOCATIONS</a>
                    <a className="nav-item nav-link" href="/">CATERING</a>
                    <a className="nav-item nav-link" href="/">CULTURE</a>
                </div>
            </div>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
}

export default navBar;