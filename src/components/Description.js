import React, { useState } from "react";
import { Typography, Switch, Box, TextField } from "@mui/material";


const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
  const descriptionText =
"Oversikt over";

const [value, setValue] = useState("Skriv noe her");
const [checked, setChecked] = useState(false);

console.log(value);
  return (
    <Box sx={{ my: 4,    display: "flex",
      justifyContent: "center",
      flexDirection: "column",
     }}>

      <img src="/obs.png"  alt=""/>

      <Typography variant="h5" component="h2" gutterBottom>
        En ny dag, en ny mulighet
      </Typography>

      <Typography variant="body1">{descriptionText}</Typography>
      <Switch 
      value={checked}
      onChange={(e) => setChecked(e.target.value)}/>
      <TextField
      id="outlined-basic"
      label="Tilbakemelding"
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default Description;
