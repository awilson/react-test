import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar";
import Button from "@material-ui/core/Button";
import NumberSelect from "./NumberSelect";
import ShutterSpeed from "./ShutterSpeed";
import ISO from "./ISO";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    variant: "text",
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.primary,
    height: 50,
    width: 205,
    justify: "center",
    alignContent: "center",
    alignItems: "center",
    wrap: "nowrap"
  },
  ExpansionPanel: {
    width: "25%"
  }
});

function controlPanel(props) {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(null);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <ExpansionPanel
        className={classes.ExpansionPanel}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>General settings</Typography>
          <Typography>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Button className={classes.button} variant="contained">
                Take Image
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs>
              <Button className={classes.button} variant="contained">
                Start Video Capture
              </Button>
            </Grid>
            <Grid item xs>
              <NumberSelect> </NumberSelect>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <ShutterSpeed> </ShutterSpeed>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <ISO> </ISO>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24} Legend="true">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          {controlPanel(props)}
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AutoGrid);
