import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select, TextField } from "@mui/material";

function DataCreation() {

  // name, # of objects, sobject dropdown, submit button

  const [state, setState] = useState({
    sobject: '',
    numofsobject: '',
    name: 'Randomly Generated Name',
    // If they don't change name it will use the default value above
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />
        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <form onSubmit={handleSubmit} style={{width: '100%'}}>
              <FormControl variant="filled" style={{width: '100%', marginBottom: '40px'}}>
                <InputLabel id="choose-sobject-label">Please Choose an SObject</InputLabel>
                <Select
                  labelId="choose-sobject-label"
                  id="choose-sobject"
                  value={state.sobject}
                  onChange={handleChange}
                  name="sobject"
                  fullWidth
                  required
                >
                  <MenuItem value={'Account'}>Account</MenuItem>
                  <MenuItem value={'Contact'}>Contact</MenuItem>
                  <MenuItem value={'Lead'}>Lead</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="num-of-sobjects"
                label="Number of SObjects to Generate"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={state.numofsobject}
                onChange={handleChange}
                name="numofsobject"
                fullWidth
                required
                style={{marginBottom: '40px'}}
              />
              <TextField
                id="name"
                label="Name of SObjects (will append -1, -2, etc for each SObject's individual name)"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={state.name}
                onChange={handleChange}
                name="name"
                fullWidth
                style={{marginBottom: '40px'}}
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default DataCreation;