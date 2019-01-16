import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 10,
    height: 50
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
}));

function NumberSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
    labelWidth: 0
  });
  const inputLabelRef = React.useRef(null);

  React.useEffect(() => {
    setState({
      ...state,
      labelWidth: ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth
    });
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabelRef} htmlFor="outlined-age-native-simple">
          Age
        </InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange("age")}
          input={
            <OutlinedInput
              name="age"
              labelWidth={state.labelWidth}
              id="outlined-age-native-simple"
            />
          }
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default NumberSelects;
