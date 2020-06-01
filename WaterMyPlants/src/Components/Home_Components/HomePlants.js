import React, { useState, useEffect } from "react";
import PlantsCard from "./PlantsCard";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomePlants = () => {
  /* State management */
  const [plants, setPlants] = useState({
    name: "",
    water: "",
    species: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    water: "",
    species: "",
  });

  useEffect(() => {
    axios
      .get(`https://preston-plant.herokuapp.com/api/plants/`)
      .then((response) => {
        const plants = response.data;
        console.log("These are the plants: ", plants);
        setPlants(plants);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className="Header">Plants</h1>
      <Container>
        {plants.map((item) => {
          return (
            <PlantsCard
              key={item.name}
              name={item.name}
              water={item.water}
              species={item.species}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default HomePlants;
