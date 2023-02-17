//logo={props.sprites.front_default}
import CardMedia from "@mui/material/CardMedia";
import StyledBackgroundImage from "./StyledBackgroundImage";

export default function CustomCardMedia({ props }) {
  return (
    <StyledBackgroundImage>
      <CardMedia
        sx={{ width: 200, height: 200 }}
        image={props.sprites.other["official-artwork"].front_default}
      />
    </StyledBackgroundImage>
  );
}
