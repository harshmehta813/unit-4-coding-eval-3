import { createContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const AppContext = createContext();

function Input({ onAdd, onSearch }) {
  const [state, setState] = useState("masai");
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="input">
        <TextField
          id="outlined-basic"
          label="Search Repositories"
          variant="outlined"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            onAdd(state);
            setState("");
          }}
        >
          Search
        </Button>
        <TextField
          id="outlined-basic"
          label="Search Page"
          variant="outlined"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            onSearch(page);
            setPage(1);
          }}
        >
          Page
        </Button>
      </div>
    </>
  );
}

export default Input;
