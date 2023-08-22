import React from 'react'
import { Carousel } from 'react-responsive-carousel'
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
        </div>
    )
}

export default Home