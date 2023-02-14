import styled from "styled-components";
import weaknessesList from "../utils/PokemonWeaknesses";
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

const Weaknesses = ({ types }) => {
  if (!types) {
    return <div>Loading ... </div>;
  } else {
    // console.log(types);
    let pokemonType = [];
    types.forEach((element) => {
      pokemonType.push(element.type.name);
    });
    // console.log(pokemonType);
    // console.log(weaknessesList);

    function getWeaknesses(params) {
      const weaknesses = [];
      for (let i = 0; i < params.length; i++) {
        const type = params[i];
        let typeWeaknesses;
        if (weaknessesList[type] !== undefined) {
          typeWeaknesses = weaknessesList[type];
          // console.log(typeWeaknesses);
        } else {
          typeWeaknesses = [];
        }
        for (let j = 0; j < typeWeaknesses.length; j++) {
          const weakness = typeWeaknesses[j];
          if (!weaknesses.includes(weakness)) {
            weaknesses.push(weakness);
          }
        }
      }
      // console.log(weaknesses)
      return weaknesses;
    }
    let weaknesses = getWeaknesses(pokemonType);
    return (
      <StyledWeaknesses>
        <h3>Weaknesses</h3>
        {weaknesses.map((weakness, index) => (
          <StyledLabel key={index}>{weakness}</StyledLabel>
        ))}
      </StyledWeaknesses>
    );
  }
};
export default Weaknesses;
