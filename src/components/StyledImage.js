import styled from "styled-components";
import image1 from "../assets/image1.png";
import pokemonbackground from "../assets/pokemonbackground.png";
const StyledImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${pokemonbackground});
  background-size: cover;
  margin-right: 20px;
`;

const Image = ({ route }) => {
  return (
    <StyledImage>
      <img
        src={route}
        style={{
          width: "200%",
          height: "200%",
          transform: "scale(0.5, 0.5)",
        }}
        // src={image1}
        alt=""
      />
    </StyledImage>
  );
};

export default Image;
