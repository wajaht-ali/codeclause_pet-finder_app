import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import TypeWriter from "typewriter-effect";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styling/Home.scss";
import img1 from "../assets/imgs/img1.jpeg";
import img2 from "../assets/imgs/img2.jpeg";
import img3 from "../assets/imgs/img3.jpeg";
import img4 from "../assets/imgs/img4.jpeg";
import img5 from "../assets/imgs/img5.jpeg";

const Home = () => {
    return (
        <div className='home'>
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={true}
                showArrows={true}
                interval={3500}
                showThumbs={false}
                showIndicators={true}
            >
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </Carousel>

            <div className="content">
                <p>We will take care of</p>
                <h1>your pets!</h1>

                <h3>We Deal in:
                    <TypeWriter
                        options={{
                            strings: ["Cats", "Dogs", "Birds"],
                            autoStart: true,
                            loop: true,
                            // interval: "1000",
                            wrapperClassName: "typeWriterText"
                        }}
                    />
                </h3>

                <a href="/services"><button>Adopt Here</button></a>
            </div>

            <div className="pets-section">
                <div className="header-top">
                    <h1>Pets We Takecare</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, necessitatibus?</p>
                </div>
                <div className="animals-view">
                    {/* <div className="pics"> */}
                    <div className="box top">
                        <img src={img1} alt="img" />
                        <h2>Cats</h2>
                    </div>
                    <div className="box down">
                        <img src={img2} alt="img" />
                        <h2>Dogs</h2>
                    </div>
                    <div className="box top">
                        <img src={img3} alt="img" />
                        <h2>Birds</h2>
                    </div>
                    <div className="box down">
                        <img src={img4} alt="img" />
                        <h2>Rabbits</h2>
                    </div>
                    <div className="box top">
                        <img src={img5} alt="img" />
                        <h2>Fishes</h2>
                    </div>
                    {/* </div> */}
                </div>
            </div>

        </div>
    )
}

export default Home