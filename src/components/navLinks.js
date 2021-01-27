import React from 'react'

const NavLinks = (props) => {
    return (
        <div className="links">
            <p>
                <a href="#home" 
                onClick={props.closeNav}>
                    Home
                </a>
            </p>
            <p>
                <a href="#about"
                 onClick={props.closeNav}>
                     About Us
                </a>
            </p>
            <p>
                <a href="#story" 
                onClick={props.closeNav}>
                    Story
                </a>
            </p>
            <p>
                <a href="#blog" 
                onClick={props.closeNav}>
                    Blog
                </a>
            </p>
            <p>
                <a href="#people" 
                onClick={props.closeNav}>
                    People
                </a>
            </p>
            <p>
                <a href="#portfolio"
                onClick={props.closeNav}
                >
                    Portfolio
                </a>
            </p>
            <p>
                <a href="#event"
                onClick={props.closeNav}
                >
                    Event
                </a>
            </p>
            <p>
                <a href="#gift"
                onClick={props.closeNav}
                >
                    Gift
                </a>
            </p>
            <p>
                <a href="#rsvp"
                onClick={props.closeNav}
                >
                    RSVP
                </a>
            </p>
            <p>
                <a href="#pages"
                    onClick={props.closeNav}
                >
                Pages
                </a>
            </p>
            <p>
                <a href="#animate"
                    onClick={props.closeNav}
                >
                Animate
                </a>
            </p>
        </div>
    )
}

export default NavLinks
