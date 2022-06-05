import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade'

// import { Fade } from "react-awesome-reveal";

const LatestWork = () => {
    return (
        <div className="section container">
            <div className="text-center title display-3">
                Latest Works
            </div>
            <div>
                <div className="row mt-5">
                    <div className="col-lg-6 p-lg-5">
                        <a href="https://glistening-dasik-8e85c0.netlify.app/">
                            <Fade left>
                                <Tilt>
                                    <img className="img-fluid rounded-3" src="https://i.ibb.co/0p7RvYC/bmandar.png" alt="bmandar"
                                        border="0" />
                                </Tilt>
                            </Fade>

                        </a>
                    </div>
                    <div className="col-lg-6 p-lg-5 mt-2 mt-lg-0 d-flex justify-content-center flex-column">
                        <div className="text-center h3">
                            <Fade right>
                                <a href="https://glistening-dasik-8e85c0.netlify.app/"> bangloremandarin.com </a>
                            </Fade>
                        </div>
                        <div className="text-center   mt-2 h6 ">
                            <Fade right>
                                This is a concept website recently built for a chinese restaurant at the heart of city
                                of Bengaluru . The website&aposs intent is to help increase the restaurant&aposs sales by its
                                conversion centric design
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div
                        className="col-lg-6  order-lg-1  order-2 p-lg-5  mt-2 mt-lg-0 d-flex justify-content-center flex-column">
                        <div className="text-center h3">
                            <Fade left>
                                <a href="https://verdant-haupia-6d06b9.netlify.app"> indiangrillroom.com </a>
                            </Fade>
                        </div>
                        <div className="text-center   mt-2 h6 ">
                            <Fade left>
                                This is a concept website for a north indian restaurant named IndianGrillRoom at the heart of
                                Gurugram India. The website follows all the latest best practices that make it conversion
                                centric
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1 p-lg-5">
                        <a href="https://verdant-haupia-6d06b9.netlify.app">
                            <Tilt>
                                <Fade right>
                                    <img className="img-fluid rounded-3" src="https://i.postimg.cc/65DfBtsF/irgrill.png" alt="bmandar"
                                        border="0" />
                                </Fade>
                            </Tilt>

                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
};



export default LatestWork;
