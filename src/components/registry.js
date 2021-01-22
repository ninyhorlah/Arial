import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBill, faFilm, faBed, faMusic, faBriefcase, faGem, faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import RSVP from './RSVP';

const Registry = () => {
    var settings = {
        dots: true,
        infinite: true,
        draggable: true,
        autoplaySpeed: 2000,
        outline: false
    }
    return (
        <div className="registryContainer">
            <div className="registryInner overlay">
                <div className="aboutHeader">
                    <img src="/assets/img/headline_heart.svg" alt=""/>
                    <div className="aboutText">
                        <h2>Gift <span>Registry</span> </h2>
                    </div>
                    <div className="simpleImg">
                        <img src="/assets/img/headline_simple.svg" alt=""/>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non.</p>

                <div className="registryCarouselContainer">
                    <Slider {...settings}>
                        <div className="registryCarousel">
                            <div className="registryCarouselInner">
                                <div className="registryIcon">
                                    <FontAwesomeIcon icon={faHome}/>
                                </div>

                                <h2>House</h2>

                                <p>Aenean et trupis efficitur, pretium lorem vitae, feugiat mi.</p>
                            </div>
                            <div className="registryCarouselInner">
                                 <div className="registryIcon">
                                    <FontAwesomeIcon icon={faFilm}/>
                                </div>

                                <h2>Film</h2>

                                <p>Aenean et trupis efficitur, pretium lorem vitae, feugiat mi.</p>
                            </div>
                            <div className="registryCarouselInner">
                                 <div className="registryIcon">
                                    <FontAwesomeIcon icon={faMoneyBill}/>
                                </div>

                                <h2>Money</h2>

                                <p>Aenean et trupis efficitur, pretium lorem vitae, feugiat mi.</p>
                            </div>
                            <div className="registryCarouselInner">
                                 <div className="registryIcon">
                                    <FontAwesomeIcon icon={faBed}/>
                                </div>

                                <h2>Bed</h2>

                                <p>Aenean et trupis efficitur, pretium lorem vitae, feugiat mi.</p>
                            </div>
                        </div>
                        <div className="registryCarousel">
                            <div className="registryCarouselInner">
                                <div className="registryIcon">
                                    <FontAwesomeIcon icon={faGem}/>
                                </div>

                                <h2>Diamond</h2>

                                <p>Aenean et trupis efficitur, pretium lorem vitae, feugiat mi.</p>
                            </div>
                            <div className="registryCarouselInner">
                                 <div className="registryIcon">
                                    <FontAwesomeIcon icon={faMotorcycle}/>
                                </div>

                                <h2>Motorcycle</h2>

                                <p>Aenean et trupis efficitur, pretium lorem vitae, feugiat mi.</p>
                            </div>
                            <div className="registryCarouselInner">
                                 <div className="registryIcon">
                                    <FontAwesomeIcon icon={faBriefcase}/>
                                </div>

                                <h2>Briefcase</h2>

                                <p>Aenean et trupis efficitur, pretium lorem vitae, feugiat mi.</p>
                            </div>
                            <div className="registryCarouselInner">
                                 <div className="registryIcon">
                                    <FontAwesomeIcon icon={faMusic}/>
                                </div>

                                <h2>Music</h2>

                                <p>Aenean et trupis efficitur, pretium lorem vitae, feugiat mi.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            <RSVP/>
        </div>
    )
}

export default Registry
