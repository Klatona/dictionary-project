import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
 if (props.Synonyms) {
    return(
    <div className="similar">
                   Similar:
                  
    <ul className="Synonyms">
          {props.Synonyms.map(function(synonym, index){
            return (
                <li key={index}>
                {synonym}
                </li>
            )
        })}
    </ul>
   </div>   
);
} else {
    return null;
}
}