import React from 'react';
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import  MapContainer  from './map';

const Guest = () => {

    var settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
    }

    return (
        <div id="event">
            <div className="guestInner">
                <div className="aboutHeader">
                        <div className="aboutText">
                            <h2><span>Wedding</span> Event</h2>
                        </div>
                        <div className="simpleImg">
                            <img src="/assets/img/headline_simple.svg" alt=""/>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non.</p>

                    <div className="guestContent">
                        <div className="firstGuestContent">
                            <h2>Aliquam vestibulum eros</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non, tristique condimentum dui.</p>
                            <p>Donec venenatis porta mollis. Fusce quis tincidunt orci. Integer fermentum ante augue, sed accumsan purus ornare vitae. Ut accumsan ornare elit at maximus. Aliquam tincidunt ipsum ut nunc sollicitudin dapibus.</p>
                            <button>Read More <span className="icon"><FontAwesomeIcon icon={faAngleRight}/></span></button>
                        </div>
                        <div className="secondGuestContent">
                            <Slider {...settings}>
                                <div>
                                    <h2>Our Ceremony</h2>
                                    <p>Nam condimentum lorem odio, in efficitur est facilisis sit amet. Donec eu diam accumsan, dictum ligula sed, eleifend ipsum.</p>
                                    <div className="mapWrapper">
                                        <span className="mapIcon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                        </span>
                                        <span>Show Map</span>
                                    </div>
                                </div>
                                <div>
                                    <h2>Wedding Party</h2>
                                    <p>Nam condimentum lorem odio, in efficitur est facilisis sit amet. Donec eu diam accumsan, dictum ligula sed, eleifend ipsum.</p>
                                    <div className="mapWrapper">
                                        <span className="mapIcon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                        </span>
                                        <span>Show Map</span>
                                    </div>
                                </div>
                                <div>
                                    <h2>Reception</h2>
                                    <p>Nam condimentum lorem odio, in efficitur est facilisis sit amet. Donec eu diam accumsan, dictum ligula sed, eleifend ipsum.</p>
                                    <div className="mapWrapper">
                                        <span className="mapIcon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                        </span>
                                        <span>Show Map</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
            </div>
            <div className="map">
                <MapContainer/>
            </div>
        </div>
    )
}

export default Guest
