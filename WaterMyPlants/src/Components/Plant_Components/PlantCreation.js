import React, {useState} from "react";
import Plants from "./Plants";
/* import styled from "styled-components"; */

const PlantCreation = (props) => {

    const [plants, setPlant] = useState(
        {
          id: Date.now(),
          plantName: " ",
          species: " ",
          care: " ",
          description: " "
        }
    );

    /* console.log(plants) */

  const onChangeHandler = (event) => {
    setPlant({
      ...plants,
      [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (e) => {
    //To prevent page from reloading all of react content
    e.preventDefault();
    //Adding results of this PlantCreation as input into
    props.loadPlants(plants)

      /* setPlant({
       *           plantName: "",
       *           species: "",
       *           care:"",
       *           description:"",
       *           id:Date.now()
       * })} */
}

  return (
            <form onSubmit = {event => onSubmitHandler(event)}>
                    <div>
                        <label htmlFor="plantName">Plant Name:</label>
                        <input
                            id = "plantName"
                            type = "text"
                            name = "plantName"
                            placeholder = "Please Enter Your Plant Name:"
                            value = {plants.plantName}
                            onChange ={event => onChangeHandler(event)}
                        />
                    </div>

                    <div>
                        <label htmlFor="species">Plant Species:</label>
                        <input
                            id = "species"
                            type = "text"
                            name = "species"
                            placeholder = "Select or create your plant species"
                            value = {plants.species}
                            onChange ={event => onChangeHandler(event)}
                        />
                    </div>

                    <div>
                        <label htmlFor="care">Requirements:</label>
                        <input
                            id = "care"
                            type = "text"
                            name = "care"
                            placeholder = " Please set the care level required: "
                            value = {plants.care}
                            onChange ={event => onChangeHandler(event)}
                        />
                    </div>

                    <div>
                        <label htmlFor="discription">Description:</label>
                        <textarea
                            id="discription"
                            name="discription"
                            value={plants.discription}
                            onChange ={event => onChangeHandler(event)}
                        />
                    </div>

                <button type="submit"> Click To Add Plant!</button>
            </form>

  );
};

export default PlantCreation;
