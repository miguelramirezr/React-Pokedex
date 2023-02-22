import styled from "styled-components";
import { Card } from "@mui/material";
import greenbackground from "../../assets/greenbackground.jpg";
const StyledGreenbackgroundCard = styled(Card)`
    width: auto,
    height: auto,
    margin-top: 2px;
    background-image: url(${greenbackground});
    background-size: cover;
`;
export default StyledGreenbackgroundCard;
