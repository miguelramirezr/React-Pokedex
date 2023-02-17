//Hola ya solucione lo del Background Image si lo quieren hacer con Material UI
//Primero deben crearse un styled component del tipo Card que nos da material
//Y dentro pasarle la imagen de fondo

import styled from "styled-components";
import { Card } from "@mui/material";
import pokemonbackground from "../../assets/pokemonbackground.png";

const StyledBackgroundImage = styled(Card)`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${pokemonbackground});
    background-size: cover;
    margin-right: 20px;
`;
export default StyledBackgroundImage;

