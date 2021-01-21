import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "./components/Typography";
import AppHeroLayout from "./AppHeroLayout";
import backgroundImage from "./images/coffee-keyboard-unsplash.jpg";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function AppHero(props) {
  const { classes } = props;

  return (
    <AppHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: "none" }} src={backgroundImage} alt="programmer" />
      <Typography
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
        className={classes.more}
      >
        My GitHub Stuff
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        A place to discover some of my personal projects from GitHub.
      </Typography>
    </AppHeroLayout>
  );
}

AppHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHero);
