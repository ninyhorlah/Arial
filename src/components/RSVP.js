import React from 'react'

const RSVP = () => {
    return (
        <div className="rsvpContainer" id="rsvp">
            <div className="rsvpInner">
                <div className="aboutHeader">
                    <div className="aboutText  storyText rsvpText">
                        <h2><span>R</span>SVP</h2>
                    </div>
                    <div className="simpleImg">
                        <img src="/assets/img/headline_simple.svg" alt=""/>
                    </div>
                </div>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non.</p>
            </div>

            <form action="">
                <div className="formInner">
                    <div className="formName">
                        <label htmlFor="name">Name</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className="formInner">
                    <div>
                        <label htmlFor="guest">Number Of Guests</label>
                        <select name="guest" id="guest">
                            <option value="choose">Please Choose</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="event">Attending The Events</label>
                        <select name="event" >
                            <option value="choose">Please Choose</option>
                            <option value="1">Event 1</option>
                            <option value="2">Event 2</option>
                            <option value="3">Event 3</option>
                            <option value="4">All Event</option>
                        </select>
                    </div>
                </div>
                <div className="formTextarea">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="7"></textarea>
                </div>

                <div className="btn">
                    <input type="submit" value="I am attending"/>
                </div>
            </form>
        </div>
    )
}

export default RSVP
