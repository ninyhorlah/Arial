import React from 'react'
import Slider from 'react-slick';
// import { FontAwesomeIcon } from '@fo'

const About = () => {
    var settings = {
        dots: true,
        infinite: true,
       vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,

    }
    return (
        <div className="aboutContainer">
            <div className="overlay">
                <div className="aboutInner">
                    <div className="aboutHeader">
                        <img src="/assets/img/headline_heart.svg" alt=""/>
                        <div className="aboutText">
                            <h2>About <span>Us</span></h2>
                        </div>
                        <div className="simpleImg">
                            <img src="/assets/img/headline_simple.svg" alt=""/>
                        </div>
                        <div className="social">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"></a>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non.</p>

                    <div className="couples">
                        <div className="couplesInner">
                            <div 
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            >
                                <img src="/assets/img/bride.jpg" alt=""/>
                            </div>
                            <h3>Jane Doe <span className="coupleName">Bride</span></h3>
                            <p>Mauris fermentum lacinia nisl. Duis nec rutrum nisl. Ut ac eros fermentum.</p>
                        </div>
                        <div className="couplesInner">
                            <div 
                            data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            >
                                <img src="/assets/img/groom.jpg" alt=""/>
                            </div>
                            <h3>Jone Doe <span className="coupleName">Groom</span></h3>
                            <p>Mauris fermentum lacinia nisl. Duis nec rutrum nisl. Ut ac eros fermentum.</p>
                        </div>
                    </div>
                </div>


                <div className="carousel">
                    <div className='carouselInner'>
                        <Slider {...settings}>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis cum dolore tempora odio, voluptatibus reiciendis aliquid at officia enim!</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur soluta dicta eligendi cum a alias id! Facere, modi maxime.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum tempore porro ullam ratione autem suscipit ad magni animi non?</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
