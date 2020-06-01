import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
  margin: 1%;
  position: relative;
  border-radius: 0.2rem;
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  &:hover {
    bottom: 0.5rem;
    background-color: #235b2d;
  }
`;
const PlantsCard = (props) => {
  return (
    <Card>
      <h2>{props.name}</h2>
      <p>Water: {props.water}</p>
      <p>Species: {props.species}</p>
    </Card>
  );
};
export default PlantsCard;
