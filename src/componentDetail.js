import React from "react";
import faker from "faker";

const ComponentDetail = props => {

    return (

        <div className="comment">
            <a href="/" >
                <img src={faker.image.image()} alt="avater" style={{ "height": "70px", "width": "70px" }} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metadata">
                <span className="data">{props.time}</span>
            </div>
            <div className="text">
                {props.content}
            </div>
        </div>

    )
}
export default ComponentDetail;