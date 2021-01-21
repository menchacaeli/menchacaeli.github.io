import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "./components/Typography";
import curvy from "./images/curvy-lines.png";
import CodeIcon from "@material-ui/icons/Code";
import SchoolIcon from "@material-ui/icons/School";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvy: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function AppValues(props) {
  const { classes } = props;
  const contentOne =
    "The frameworks and libraries I chose to use in my projects are React, React Native, Redux, Vue, Node, Express, MongoDB, Three.js, Bootstrap, Material";
  const contentTwo =
    "For my graduate project, I developed an easier way to use device sensors using JavaScript.";
  const contentThree =
    "To exercise my skills, I like to create projects that will challenge me and take my programming skills to the next level.";
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={curvy} className={classes.curvy} alt="curvy" />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <CodeIcon fontSize="large" />
              <Typography variant="h6" className={classes.title}>
                Frameworks & Libraries
              </Typography>
              <Typography variant="h5">{contentOne}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <SchoolIcon fontSize="large" />
              <Typography variant="h6" className={classes.title}>
                Graduate Field Project
              </Typography>
              <Typography variant="h5">{contentTwo}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <FitnessCenterIcon fontSize="large" />
              <Typography variant="h6" className={classes.title}>
                Exercise Skills
              </Typography>
              <Typography variant="h5">{contentThree}</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

AppValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppValues);
