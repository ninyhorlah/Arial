import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Button = () => {
    return (
        <div id="home" className="back" title="Back To Top">
            <FontAwesomeIcon icon={faAngleUp}/>
        </div>
    )
}

export default Button
