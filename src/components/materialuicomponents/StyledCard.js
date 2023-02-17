import styled from "styled-components";
import { Card } from "@mui/material";
import greenbackground from "../../assets/greenbackground.jpg";
const StyledCard = styled(Card)`
    width: 400px,
    height: 650px,
    margin-top: 2px;
    background-image: url(${greenbackground});
    background-size: cover;
`;
export default StyledCard;
