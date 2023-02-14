import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const StyledType = styled.div`
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

const Type = ({ types }) => {
  // console.log("types : " + types);
  if (!types) return <div>Loading ... </div>;
  return (
    <StyledType>
      <h3>types </h3>
      {types.map(({ type }) => (
        <StyledLabel key={uuidv4()}>{type.name}</StyledLabel>
      ))}
    </StyledType>
  );
};

export default Type;
