import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

export default function CustomMeasurement({ pokeweight, pokeheight }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  useEffect(() => {
    const weight = pokeweight / 10; //kg
    const height = pokeheight / 10; // m.
    setWeight(weight);
    setHeight(height);
  }, [pokeweight, pokeheight]);

  return (
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: -2,
      }}
    >
      <Typography variant="h6" sx={{ color: "white" }}>
        HEIGHT
        <Typography variant="subtitle2" gutterBottom sx={{ color: "black" }}>
          {height} m
        </Typography>
      </Typography>
      <Typography variant="h6" sx={{ color: "white" }}>
        WEIGHT
        <Typography variant="subtitle2" gutterBottom sx={{ color: "black" }}>
          {weight} kg
        </Typography>
      </Typography>
    </CardContent>
  );
}
