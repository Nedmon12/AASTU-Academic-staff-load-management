import { Button, Add, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { NavLink } from "react-router-dom";

function AddCourse() {
  return (
    <Box
      sx={{
        //border: "1px solid black",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 1,
      }}
    >
      <NavLink to={`/addCourse`}>
        <Button variant="contained" startIcon={<AddIcon />}>
          Add
        </Button>
      </NavLink>
    </Box>
  );
}

export default AddCourse;
