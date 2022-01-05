import React from "react";
import TextField from "@mui/material/TextField";
import getRepo from "./redux";
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

function Search() {
  return (
    <>
      <h1>Search</h1>
      <TextField
        id="outlined-basic"
        label="Search Repositories"
        variant="outlined"
      />
    </>
  );
}

export default Search;
