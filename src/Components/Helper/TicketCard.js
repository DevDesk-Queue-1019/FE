/* eslint-disable no-restricted-globals */
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTicket } from "../../actions";
// import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "800%"
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightRegular
  },
  actions: {
    padding: "1rem"
  }
}));

const TicketCard = ({ title, description, tried, type, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="TicketCard">
      <ExpansionPanel style={{ margin: "1rem", backgroundColor: "CornflowerBlue" }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {title} : {type}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Description: {description}</Typography>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelDetails>
          <Typography>Tried: {tried}</Typography>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions className={classes.actions}>
          <FontAwesomeIcon
            icon={faTrash}
            className="DeleteButton"
            onClick={() => {
              dispatch(deleteTicket(id));
            }}
          >
            Delete ticket
          </FontAwesomeIcon>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
};

export default TicketCard;
