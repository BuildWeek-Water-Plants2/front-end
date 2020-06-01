import React from "react";


const Plant = (props) => {

    return(
        <div>
            <h1> This is a Plant! </h1>
             <div key={props.newPlant.id}>
                <h2>{props.newPlant.plantName}</h2>
                <h2>{props.newPlant.species}</h2>
                <h2>{props.newPlant.care}</h2>
                <h2>{props.newPlant.happiness}</h2>
                <h2>{props.newPlant.description}</h2>
             </div> 
        </div>

    )
}

export default Plant;
