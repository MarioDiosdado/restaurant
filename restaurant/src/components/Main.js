import React from "react";
import "../style/nav.css";
import "../style/main.css";
import "../style/button.css";
import Button from "./Button";

// This style object is used for the entire page, everything else is on the css file
const styles = {
    box: {
        background: "#BF0000"
    },
    images: {
        position: "relative",
        padding: 0,
        width: "100%",
        height: "auto",
    },
    mail: {
        padding: "15px",
        backgroundColor: "#cb1e28"
    },
    mail2: {
        padding: "30px 20px 20px 50px",
        backgroundColor: "#cb1e28"
    },

}

function Main() {
    return <div >
        <div className="mainpage" style={styles.box}>
            <div className="container-fluid">
                {/* This row includes the first 3 images on the home page */}
                <div className="row">
                    {/* Image is setup as a background with the first-section class */}
                    <div className="col-md-8 col-sm-12 first-section" style={styles.images}>
                        {/* Label on the first image/section */}
                        <label className="month" style={{ fontFamily: `'Playfair Display', serif` }}>STEAK OF THE MONTH</label>
                        <Button btnClass={"btn-test"} label="TRY IT NOW"></Button>
                    </div>
                    {/* This column is divided into 2 rows so we have image 2 and 3 in top of each other */}
                    <div className="col-md-4 col-sm-12" style={styles.images}>
                        <div className="row">
                            <div className="col-md-12">
                                <img src={process.env.PUBLIC_URL + '/images/main2.jpg'} className="img-fluid" alt="Responsive imag"></img>
                                <div className="img-overlay-button btn-img2">
                                    <Button label="PIXEL PICKS"></Button>
                                </div>
                            </div>

                        </div>
                        <div className="row" >
                            <div className="col-md-12" >
                                <img src={process.env.PUBLIC_URL + '/images/main4.jpg'} className="img-fluid" alt="Responsive imag"></img>
                                <div className="img-overlay-button btn-img3 text-nowrap">
                                    <Button label="THIS IS A LONG BUTTON"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* This row is the baner "red horns steakhouse" in the middle of the page */}
                <div className="row"><img src={process.env.PUBLIC_URL + '/images/main5.jpg'} className="img-fluid" alt="Responsive imag"></img>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12 family-section" style={styles.images}>
                        <div className="text-center">
                            {/* This is the "family meals section" */}
                            <img src={process.env.PUBLIC_URL + '/images/xpng.png'} className="img-fluid x-img" alt="Responsive imag"></img>
                            <Button btnClass={"btn-img5"} label="FAMILY MEALS "></Button>
                            <img src={process.env.PUBLIC_URL + '/images/xpng.png'} className="img-fluid x-img" alt="Responsive imag"></img>
                        </div>
                    </div>
                    {/* This column has a title, a P tag and a button */}
                    <div className="col-md-8 col-sm-12 title-section" style={styles.images}>
                        <h2 style={{ fontFamily: `'Playfair Display', serif` }}>THIS IS THE TITLE</h2>
                        <p className="month">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum justo magna,
                            at sollicitudin tortor cursus quis. Integer dolor nisl, tincidunt sit amet odio sed, ornare convallis eros. </p>
                        <Button btnClass={"btn-test"} label="Lorem ipsum dolor sit amet"></Button>
                    </div>
                </div>
                {/* This row includes the Mail form */}
                <div className="row test3">
                    <div className="col-9" style={styles.mail2}>
                        <h1 style={{ fontFamily: `'Playfair Display', serif` }}>Best steaks in town. Period.</h1>
                    </div>
                    <form style={styles.mail}>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="YOUR EMAIL"></input>
                        </div>
                        <button type="submit" className="btn btn-danger subscribeBtn" style={{ fontFamily: `'Playfair Display', serif` }}>SUBSCRIBE</button>
                    </form>
                </div>
                {/* Final row */}
                <div className="row">
                    <div className="col-3" style={styles.images}>
                        <div className="col" style={styles.images}><img src={process.env.PUBLIC_URL + '/images/main8.jpg'} className="img-fluid" alt="Responsive imag"></img></div>
                    </div>
                    <div className="col-9" style={styles.images}>
                    <div id="carouselExampleControls" class="carousel slide"  data-interval="3000" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/car1.jpg'} alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/car2.jpg'} alt="Second slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/car3.jpg'} alt="Third slide"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

}

export default Main;