import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { Chip } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import colortypes from "../../utils/ColorTypes";
import { Typography } from "@mui/material";
export default function CustomCardHeader({ props }) {
  return (
    <CardHeader
      avatar={
        <Avatar
          sx={{ bgcolor: "white", boxShadow: 4, padding: "5px", margin: "2px" }}
          aria-label="recipe"
          src={props.sprites.front_default}
        ></Avatar>
      }
      titleTypographyProps={{ variant: "h5", alig: "left" }}
      title={props.name}
      subheader={props.types.map(({ type }) => (
        <Chip
          key={uuidv4()}
          label={type.name}
          sx={{ backgroundColor: colortypes[type.name], color: "white" }}
        />
      ))}
      action={
        <Typography variant="h4" gutterBottom>
          #{props.id}
        </Typography>
      }
    />
  );
}