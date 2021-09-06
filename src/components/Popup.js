import React from 'react'
import './popup.css'
import RoboImage from "./images/Robot_image.jpg"

function Popup(props) {
    return (
        <div className="popup--back">
            <div className="popup--content">
                <div className="popup--close" onClick={props.closePopup}>x</div>
                    <h1 className="tc">Robots Online</h1>
                    <img src={RoboImage} alt="robot"/>
            </div>
        </div>
    )
}

export default Popup
