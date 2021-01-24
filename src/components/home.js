import React from 'react';
import Slider from 'react-slick'

let Home = () => {
    var settings = {
        // dots: true,
        infinite: true,
        // speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return (
       <div id="home">
           <div className="homeContainer">
               <div className="sliderContainer">
                   <div className="homeText">
                        <div className="homeOverlay">
                            <div className="homeInnerText">
                                <div className="wedding">
                                    <h2><span>W</span>edding</h2>
                                </div>
                                <div className="weddingName">
                                    <h2>Jane & Joe</h2>
                                </div>
                                <div className="weddingDate">
                                    <p>25. Jun. 2019</p>
                                </div>
                                <div className="expired">
                                    <p>EXPIRED</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                   <Slider {...settings}>
                        <div className="sliderInner1 sliderImage">
                            <div className="slider"></div>
                        </div>
                        <div className="sliderInner2 sliderImage">
                            <div className="slider"></div>
                        </div>
                        <div className="sliderInner3 sliderImage">
                            <div className="slider"></div>
                        </div>
                    </Slider>
               </div>
           </div>
       </div>
    )
}
export default Home;