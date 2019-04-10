import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  root: {
    padding: 10
  },
  heading: {
    fontFamily: "Dosis",
    fontSize: 17,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "#344750",
    verticalAlign: "middle",
    textAlign: "center"
  },
  secondaryHeading: {
    fontFamily: "Dosis",
    fontSize: 15,
    fontWeight: 450,
    textTransform: "capitalize",
    verticalAlign: "middle",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
    //width: "100%"
  },
  column: {
    display: "flex",
    flexBasis: "33.33%",
    justifyContent: "center",
    alignItems: "center"
  },

  columnOption: {
    flexBasis: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  cover: {
    width: 151,
    borderRadius: "5px 0 0 5px"
    //marginRight: 20
  },
  expensionRoot: {
    padding: 0
  },
  expensionContent: {
    margin: 0,
    height: 80
  },
  test: {
    margin: "0 !important"
  },
  chip: {
    margin: 10
  }
});

function VersionComp(props) {
  const { classes } = props;
  const ourOptions = props.listOp.map(obj => {
    return <Chip label={obj} className={classes.chip} />;
  });
  let object = {
    code: props.code,
    image: props.img,
    nom: props.nom,
    listOp: props.listOp
  };
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          classes={{
            root: classes.expensionRoot,
            content: classes.expensionContent,
            expanded: classes.test
          }}
          expandIcon={<ExpandMoreIcon />}
        >
          <CardMedia
            className={classes.cover}
            image={props.img}
            title="cover for car version"
          />

          <div className={classes.column}>
            <Typography className={classes.heading}>{props.nom}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {props.code}
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.columnOption}>{ourOptions}</div>
          <div className={classNames(classes.helper)}>
            <Typography variant="caption">
              la liste des options compatible avec cette version
              <br />
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button
            size="small"
            onClick={() => props.handleOpenDeleteVersion(object)}
          >
            Supprimer
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => props.handleOpenModifierVersion(object)}
          >
            Modifier
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

VersionComp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VersionComp);
