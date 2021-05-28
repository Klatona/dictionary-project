import React from "react";
import "./Phonetic.css";

export default function Phonetic (props) {
    return (
        <div className="Phonetic">
            <a href = {props.phonetic.audio} target="_blank" rel="noreferrer">
                <i class="fas fa-volume-up"></i>
            </a>
            
            <div className="phoneticText">
            {props.phonetic.text}
            </div>
        </div>
    );
}