import React from "react";


const styles = {
    box: {
        background: "red"
    },
    images: {
        padding: 0
    }
}

function Jumbo() {
    return <div >

        <div className="mainpage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6" style={styles.images}>
                        <img src="https://via.placeholder.com/788x350" className="img-fluid" alt="Responsive imag"></img>
                    </div>
                    <div className="col-6" style={styles.images}>
                        <div className="row">
                            <div className="col"><img src="https://via.placeholder.com/788x175" className="img-fluid" alt="Responsive imag"></img></div>
                        </div>
                        <div className="row" >
                            <div className="col" ><img src="https://via.placeholder.com/788x175" className="img-fluid" alt="Responsive imag"></img></div>
                        </div>
                    </div>
                </div>
                <div className="row"><img src="https://via.placeholder.com/1578x150" className="img-fluid" alt="Responsive imag"></img>
                </div>
                <div className="row">
                    <div className="col-3" style={styles.images}>
                        <div className="col" style={styles.images}><img src="https://via.placeholder.com/394x349" className="img-fluid" alt="Responsive imag"></img></div>
                    </div>
                    <div className="col-9" style={styles.images}>
                        <div className="col" style={styles.images}><img src="https://via.placeholder.com/1183x350" className="img-fluid" alt="Responsive imag"></img></div>
                    </div>
                </div>
                <div className="row"><img src="https://via.placeholder.com/1578x150" className="img-fluid" alt="Responsive imag"></img>
                </div>
                <div className="row">
                    <div className="col-3" style={styles.images}>
                        <div className="col" style={styles.images}><img src="https://via.placeholder.com/394x349" className="img-fluid" alt="Responsive imag"></img></div>
                    </div>
                    <div className="col-9" style={styles.images}>
                        <div className="col" style={styles.images}><img src="https://via.placeholder.com/1183x350" className="img-fluid" alt="Responsive imag"></img></div>
                    </div>
                </div>
            </div>
        </div>

    </div>

}

export default Jumbo;