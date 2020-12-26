import React from 'react'
import './Card.css'






function Cards(props) {
    return (

        <div className = "cards">
            <div className = "card">
                <img src= {props.imgsrc} alt="picture" className = "image" />
                <div className = "title">
                    <span className = "title_place"> {props.pname} </span>
                    <a href= {props.link} target = "_anurag">
                        <button> VISIT </button>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Cards