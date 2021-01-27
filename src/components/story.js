import React from 'react'
import Blog from './blog'

const Story = () => {
    return (
        <div className="storyContainer" id="story">
            <div className="storyInnerContainer">
                <div className="storyInner">
                    <div className="aboutHeader">
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
                <Blog/>
            </div>
        </div>
    )
}

export default Story
