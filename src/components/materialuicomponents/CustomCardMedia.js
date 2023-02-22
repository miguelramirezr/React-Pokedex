import CardMedia from "@mui/material/CardMedia";
import StyledBackgroundImage from "./StyledBackgroundImage";
import rightarrow from "../../assets/rightarrow.png";
import leftarrow from "../../assets/leftarrow.png";
import useCounter from "../../hooks/useCounter";
export default function CustomCardMedia({ props, setCurrentId, currentId }) {
  const [Increment, Decrement] = useCounter(1, currentId, setCurrentId);

  return (
    <StyledBackgroundImage>
      <button
        onClick = {Decrement}
        style={{
          backgroundImage: `url(${leftarrow})`,
          backgroundSize: "cover",
          width: "20px",
          height: "20px",
          backgroundColor: "transparent",
        }}
      ></button>
      <CardMedia
        sx={{ width: 200, height: 200 }}
        image={props.sprites.other["official-artwork"].front_default}
      />
      <button
        onClick = {Increment}
        style={{
          backgroundImage: `url(${rightarrow})`,
          backgroundSize: "cover",
          width: "20px",
          height: "20px",
          backgroundColor: "transparent",
        }}
      ></button>
    </StyledBackgroundImage>
  );
}
