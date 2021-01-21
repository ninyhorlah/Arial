import React from 'react'

const Important = () => {
    return (
        <div>
            <div className="importantInner">
                <div className="aboutHeader">
                    <img src="/assets/img/headline_heart.svg" alt=""/>
                    <div className="aboutText  storyText">
                        <h2>Important <span>People</span></h2>
                    </div>
                    <div className="simpleImg">
                        <img src="/assets/img/headline_simple.svg" alt=""/>
                    </div>
                </div>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non.</p>
                <div className="importantPictures">
                    <div className="brideMaids">
                        <h2>Bridemaids</h2>
                        <div className="pictures">
                            <span
                             data-aos="zoom-in"
                             data-aos-delay="1000"
                             >
                                <img src="/assets/img/people_1.jpg" alt=""/>
                                <p>John Doe</p>
                            </span>
                            <span
                            data-aos="zoom-in"
                            data-aos-delay="1500"
                            >
                                <img src="/assets/img/people_2.jpg" alt=""/>
                                <p>John Doe</p>
                            </span>
                            <span
                            data-aos="zoom-in"
                            data-aos-delay="2000"
                            >
                                <img src="/assets/img/people_3.jpg" alt=""/>
                                <p>John Doe</p>
                            </span>
                        </div>
                    </div>
                    <div className="groomsMen">
                        <h2>Groomsmen's</h2>
                        <div className="pictures">
                            <span
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            >
                                <img src="/assets/img/people_4.jpg" alt=""/>
                                <p>John Doe</p>
                            </span>
                            <span
                            data-aos="zoom-in"
                            data-aos-delay="1500"
                            >
                                <img src="/assets/img/people_5.jpg" alt=""/>
                                <p>John Doe</p>
                            </span>
                            <span
                            data-aos="zoom-in"
                            data-aos-delay="2000"
                            >
                                <img src="/assets/img/people_6.jpg" alt=""/>
                                <p>John Doe</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistics">
                <div>
                    <p className="numbers">4500</p>
                    <p>People</p>
                </div>
                <div>
                    <p className="numbers">153</p>
                    <p>People</p>
                </div>
                <div>
                    <p className="numbers">49</p>
                    <p>People</p>
                </div>
                <div>
                    <p className="numbers">978</p>
                    <p>People</p>
                </div>
            </div>
        </div>
    )
}

export default Important;
