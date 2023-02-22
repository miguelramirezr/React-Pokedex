import styled from "styled-components";
import { Card } from "@mui/material";
import pokemonbackground from "../../assets/pokemonbackground.png";

const StyledBackgroundImage = styled(Card)`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url(${pokemonbackground});
    background-size: cover;
    margin-right: 20px;
`;
export default StyledBackgroundImage;

