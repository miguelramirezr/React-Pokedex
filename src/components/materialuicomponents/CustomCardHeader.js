import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import logo from "../../assets/logo.png";

export default function CustomCardHeader({ props }) {
  return (
    <CardHeader
      avatar={
        <Avatar
          sx={{ bgcolor: "white", boxShadow: 5, padding: "5px", margin: "2px" }}
          aria-label="recipe"
          src={props.sprites.front_default}
        ></Avatar>
      }
      titleTypographyProps={{ variant: "h4", alig: "left" }}
      title={props.name}
    />
  );
}
