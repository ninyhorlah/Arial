import React from 'react'

const About = () => {
    return (
        <div className="aboutContainer">
            <div className="aboutHeader">
                <img src="/assets/img/headline_heart.svg" alt=""/>
                <div className="aboutText">
                    <h2>About <span>Us</span></h2>
                </div>
                <div className="simpleImg">
                    <img src="/assets/img/headline_simple.svg" alt=""/>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non.</p>

            <div className="couples">
                <div>
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
                <div>
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
    )
}

export default About
