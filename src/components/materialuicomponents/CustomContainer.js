import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomCard from "./CustomCard";
export default function CustomContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "#ffff00",
            height: 685,
            width: 440,
            margin: "auto",
            borderRadius: 5,
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: 'auto',
          }}
        >
          <CustomCard />
        </Box>
      </Container>
    </React.Fragment>
  );
}
