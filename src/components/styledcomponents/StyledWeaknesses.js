import styled from "styled-components";
import React, { useEffect, useState } from "react";
import usePokemonDamage from "../../hooks/usePokemonDamage";
const StyledWeaknesses = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  flex-wrap: wrap;
`;

const StyledLabel = styled.label`
  padding-right: 5px;
  padding-top: 20px;
  padding-left: 5px;
`;

const Weaknesses = ({ types2 }) => {
  const weaknesses = usePokemonDamage(types2);

  if (!types2) {
    return <div>loading ...</div>;
  } else {
    // console.log(weaknesses);
    return (
      <StyledWeaknesses>
        <h3>Weaknesses</h3>
        {weaknesses.map((weakness, index) => (
          <StyledLabel key={index}>{weakness.name}</StyledLabel>
        ))}
      </StyledWeaknesses>
    );
  }
};

export default Weaknesses;
