import React from 'react'

const Story = () => {
    return (
        <div className="storyContainer">
            <div className="storyInnerContainer">
                <div className="storyInner">
                    <div className="aboutHeader">
                        <img src="/assets/img/headline_heart.svg" alt=""/>
                        <div className="aboutText  storyText">
                            <h2><span>Our</span> Love Story</h2>
                        </div>
                        <div className="simpleImg">
                            <img src="/assets/img/headline_simple.svg" alt=""/>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non.</p>

                    <div className="storyPicture">
                        <div className="storyPictureInner">
                            <div className="firstDateContainer">
                                <div className="firstDateImage"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="1000"
                                >
                                    <img src="/assets/img/blog_2.jpg" alt=""/>
                                    <div className="calender">
                                        <p>12</p>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <div className="firstDateText">
                                    <h3>First date</h3>
                                    <p>Donec a velit molestie, auctor elit a, varius nibh. Nunc hendrerit, leo eu interdum auctor, nibh massa auctor mi, id semper ante nibh egestas ex. Praesent ex dolor.</p>
                                    <div>
                                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="firstDateContainer">
                                <div className="firstDateImage"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="2000"
                                >
                                    <img src="/assets/img/portfolio_6.jpg" alt=""/>
                                    <div className="calender">
                                        <p>12</p>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <div className="firstDateText">
                                    <h3>Our wedding</h3>
                                    <p>Donec a velit molestie, auctor elit a, varius nibh. Nunc hendrerit, leo eu interdum auctor, nibh massa auctor mi, id semper ante nibh egestas ex. Praesent ex dolor.</p>
                                    <div>
                                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="storyPictureInner">
                            <div className="secondDateContainer">
                                <div className="firstDateImage"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="1500"
                                >
                                    <img src="/assets/img/blog_3.jpg" alt=""/>
                                    <div className="calender">
                                        <p>12</p>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <div className="firstDateText">
                                    <h3>The first met</h3>
                                    <p>Donec a velit molestie, auctor elit a, varius nibh. Nunc hendrerit, leo eu interdum auctor, nibh massa auctor mi, id semper ante nibh egestas ex. Praesent ex dolor.</p>
                                    <div className="readMore">
                                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="secondDateContainer">
                                <div className="firstDateImage"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="2000"
                                >
                                    <img src="/assets/img/blog_2.jpg" alt=""/>
                                    <div className="calender">
                                        <p>12</p>
                                        <p>Jan</p>
                                    </div>
                                </div>
                                <div className="firstDateText proposal">
                                    <h3>The Proposal</h3>
                                    <p>Donec a velit molestie, auctor elit a, varius nibh. Nunc hendrerit, leo eu interdum auctor, nibh massa auctor mi, id semper ante nibh egestas ex. Praesent ex dolor.</p>
                                    <div>
                                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="cardContainer">
                <div 
                className="card"
                data-aos="fade-right"
                 data-aos-duration="500"
                 data-aos-delay="2000"
                >
                    <img src="/assets/img/blog_1.jpg" alt=""/>
                    <h3>Vestibulum tristique nisi</h3>
                    <p>Vestibulum tristique nisi ut odio vestibulum, in efficitur ex egestas.</p>
                    <div className="readMoreCard">
                        <a href="https://facebook.com">
                            Read More
                        </a>
                    </div>
                </div>
                <div 
                className="card"
                data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="500">
                    <img src="/assets/img/blog_2.jpg" alt=""/>
                    <h3>Vestibulum tristique nisi</h3>
                    <p>Vestibulum tristique nisi ut odio vestibulum, in efficitur ex egestas.</p>
                    <div className="readMoreCard">
                        <a href="https://facebook.com">
                            Read More
                        </a>
                    </div>
                </div>
                <div 
                className="card"
                data-aos="fade-left"
                data-aos-delay="2000"
                data-aos-duration="500"
                >
                    <img src="/assets/img/blog_3.jpg" alt=""/>
                    <h3>Vestibulum tristique nisi</h3>
                    <p>Vestibulum tristique nisi ut odio vestibulum, in efficitur ex egestas.</p>
                    <div className="readMoreCard">
                        <a href="https://facebook.com">
                            Read More
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Story
