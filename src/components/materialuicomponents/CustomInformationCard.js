import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import pokeWeaknesses from "./PokemonWeaknesses.js";
import { Chip } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import colortypes from "../../utils/ColorTypes";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomInformationCard({ name, abilities }) {
  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [weaknesses, setWeaknesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [name]);

  useEffect(() => {
    if (!isLoading) {
      pokeWeaknesses(name).then((data) => setWeaknesses(data));
    }
  }, [isLoading, name]);

  const handleClickOpen = (button) => {
    setSelectedButton(button);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedButton(null);
    setOpen(false);
  };

  return (
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: -4,
      }}
    >
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          sx={{ color: "white" }}
          onClick={() => handleClickOpen("abilities")}
        >
          Abilities
        </Button>
        <Button
          sx={{ color: "white" }}
          onClick={() => handleClickOpen("weaknesses")}
        >
          Weaknesses
        </Button>
        {/* <Button sx={{ color: "white" }}></Button> */}
      </ButtonGroup>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {selectedButton === "abilities" ? "Abilities" : "Weaknesses"}
        </DialogTitle>
        <DialogContent sx={{ width: 360  }}>
          <DialogContentText id="alert-dialog-slide-description">
            {selectedButton === "abilities" ? (
              <>
                {abilities.map((ability) => (
                  <Chip
                    key={uuidv4()}
                    label={ability.ability.name}
                    sx={{ backgroundColor: "#191970", color: "white" }}
                  />
                ))}
              </>
            ) : (
              <>
                {weaknesses && weaknesses.length > 0 ? (
                  weaknesses.map((item) => (
                    <Chip
                      key={uuidv4()}
                      label={item.name}
                      sx={{ backgroundColor: colortypes[item.name], color: "white" }}
                    />
                  ))
                ) : (
                  <p>loading</p>
                )}
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </CardContent>
  );
}
