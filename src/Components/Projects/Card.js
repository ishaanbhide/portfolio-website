import React from 'react';
import "./Card.scss";

export default function Card(props) {
    return(
        <div className="card-contents">
            <img src={props.image} alt=""/>
            <div className="text-block">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <p>{props.tech}</p>
            </div>
        </div>
    )
}