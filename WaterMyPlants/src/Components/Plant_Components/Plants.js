import React, {useState} from "react";
import {Link} from "react-router-dom";
import Plant from "./Plant";
import PlantCreation from "./PlantCreation";
/* import {Links} from "react-router-dom"; */

/* This is a list of Plants to be clicked and displayed. */

    const Plants = (props) =>{

    console.log(props.newPlants)

    const PlantList = props.newPlants.map(
        (plant) => <Plant newPlant= {plant}/>)

    return(
    <div>
        <h1> This is a list of plants! </h1>
        <div>{PlantList} </div>
        <Link to="/PlantCreation">
        <button> Add Plants </button>
        </Link>
    </div>
    )
}

export default Plants;
