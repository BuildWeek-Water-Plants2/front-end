import React, {useState} from "react";

const PlantCreation = (props) => {

    const [plants,setPlant] = useState({

        plantName: " ",
        discription:" "

    });


    console.log(plants)

    const onChangeHandler = (event) =>{
        setPlant({
            ...plants,
        [event.target.name]: event.target.value
        })
    }

    console.log(onChangeHandler)

    return (
        <form onSubmit = { event =>{
            //To prevent page from reloading all of react content
            event.preventDefault();
            //Adding results of this PlantCreation as input into  
            props.runPlantSetup(plants)
            }}> 

        <label htmlFor="plantName">Plant Name:</label>
        <input
            id = "plantName"
            type = "text"
            name = "plantName"
            placeholder = "Please Enter Your Plant Name:"
            value = {plants.plantName}
            onChange ={onChangeHandler}
        />

        <label htmlFor="plantName">Plant Name:</label>
        <input
            id = "plantName"
            type = "text"
            name = "plantName"
            placeholder = "Please Enter Your Plant Name:"
            value = {plants.plantName}
            onChange ={onChangeHandler}
        />

        <label htmlFor="plantName">Plant Name:</label>
        <input
            id = "plantName"
            type = "text"
            name = "plantName"
            placeholder = "Please Enter Your Plant Name:"
            value = {plants.plantName}
            onChange ={onChangeHandler}
        />
        
        <label htmlFor="discription">Description:</label>
        <textarea
            id="discription"
            name="discription"
            value={plants.discription}
            onChange ={onChangeHandler}
        />

        <button type="submit"> Click To Submit!</button>
        </form>

  );
};

export default PlantCreation;
