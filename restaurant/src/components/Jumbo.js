import React from "react";
import "../style/nav.css"

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
    },
    mail2: {
        padding: "30px 20px 20px 50px"
    }
}

function Jumbo() {
    return <div >

        <div className="mainpage" style={styles.box}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-sm-12" style={styles.images}>
                        <img src={process.env.PUBLIC_URL + '/images/main.jpg'} className="img-fluid" alt="Responsive imag"></img>
                        <div className="img-overlay">
                            <h1 className="month">STEAK OF THE MONTH</h1>
                        </div>
                        <div className="img-overlay2">
                            <button type="button" className="btn btn-danger btn-lg btn-responsive">TRY IT NOW</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12" style={styles.images}>
                        <div className="row">
                            <div className="col"><img src={process.env.PUBLIC_URL + '/images/main2.jpg'} className="img-fluid" alt="Responsive imag"></img></div>
                        </div>
                        <div className="row" >
                            <div className="col" ><img src={process.env.PUBLIC_URL + '/images/main4.jpg'} className="img-fluid" alt="Responsive imag"></img></div>
                        </div>
                    </div>
                </div>
                <div className="row"><img src={process.env.PUBLIC_URL + '/images/main5.jpg'} className="img-fluid" alt="Responsive imag"></img>
                </div>
                <div className="row">
                    <div className="col-3" style={styles.images}>
                        <div className="col" style={styles.images}><img src={process.env.PUBLIC_URL + '/images/main6.jpg'} className="img-fluid" alt="Responsive imag"></img></div>
                    </div>
                    <div className="col-9" style={styles.images}>
                        <div className="col" style={styles.images}><img src={process.env.PUBLIC_URL + '/images/main7.jpg'} className="img-fluid" alt="Responsive imag"></img></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9" style={styles.mail2}>
                        <h1>Best steaks in town. Period.</h1>
                    </div>
                    <form style={styles.mail}>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="YOUR EMAIL"></input>
                        </div>
                        <button type="submit" class="btn btn-danger">SUBSCRIBE</button>
                    </form>
                </div>
                <div className="row">
                    <div className="col-3" style={styles.images}>
                        <div className="col" style={styles.images}><img src={process.env.PUBLIC_URL + '/images/main8.jpg'} className="img-fluid" alt="Responsive imag"></img></div>
                    </div>
                    <div className="col-9" style={styles.images}>
                        <div className="col" style={styles.images}><img src={process.env.PUBLIC_URL + '/images/main9.jpg'} className="img-fluid" alt="Responsive imag"></img></div>
                    </div>
                </div>
            </div>
        </div>

    </div>

}

export default Jumbo;