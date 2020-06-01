/* Imports */
import React, { useState, useEffect } from "react";
import Plants from "../Plant_Components/Plants";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

/* Schema Build  */
const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "min 4 characters ")
    .required("Plant Name Required"),

  maintenance: yup.string(),
  species: yup.string(),
});

/*For material ui*/

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: { "& > *": { margin: theme.spacing(1), width: "25ch" } },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const AllPlants = () => {
  /* State */
  const [plantsState, setPlantState] = useState({
    name: "",
    maintenance: "",
    species: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    maintenance: "",
    species: "",
  });

  const classes = useStyles();
  const [post, setPost] = useState([]);
  const history = useHistory();

  const [buttonDisabled, setButtonDisabled] = useState(true);

  /* Event Handlers */
  const handleChange = (event) => {
    event.persist();
    yup
      .reach(formSchema, event.target.name)

      .validate(event.target.value)

      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        });
      });

    setPlantState({
      ...plantsState,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefualt();
    console.log("form Submitted");
    axios
      .post("https://preston-plant.herokuapp.com/api/plants", plantsState)
      .then((response) => {
        setPost(response.data);
        console.log("my data", response.data);
      })
      .catch((error) => console.log(error.response));

    setPlantState({ ...plantsState, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    formSchema.isValid(plantsState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [plantsState]);

  console.log(plantsState);

  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="plant-picture-grid" />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={0}
        >
          <Grid item sm={3} sm={3}>
            <Paper className={classes.paper}>
              <img
                src="https://images.pexels.com/photos/970089/pexels-photo-970089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="plant1"
              />
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              <img
                src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="plant2"
              />
            </Paper>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <label htmlFor="plant-name" />
        Plant Name
        <TextField
          name="name"
          value={plantsState.name}
          label="Your Plant's Name "
          onChange={handleChange}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        <br></br>
        <br></br>
        <label htmlFor="Plant-Care" />
        Maintenance
        <FormControl className={classes.formControl}>
          <Select
            onChange={handleChange}
            value={plantsState.maintenance}
            name="maintenance"
            displayEmpty
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
          <FormHelperText>Select Maintenance Level</FormHelperText>
        </FormControl>
        <br></br>
        <br></br>
        <label htmlFor="plant-species" />
        Species (optional)
        <TextField
          name="species"
          value={plantsState.species}
          label="Your Plant's Species "
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="Add-Plant=Button" />
        <Button
          onClick={() => history.push("./HomePlants")}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </form>
      <Plants />
    </div>
  );
};

export default AllPlants;
