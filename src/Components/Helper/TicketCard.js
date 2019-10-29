/* eslint-disable no-restricted-globals */
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTicket, updateTicket } from "../../actions";
// import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Divider from "@material-ui/core/Divider";
import Modal from '@material-ui/core/Modal';

import useForm from "react-hook-form";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
  },
  paper: {
    position: 'absolute',
    width: "auto",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TicketCard = ({ title, description, tried, type, id, ticket }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit } = useForm()
  const onSubmit = data => { 
    let newTicket = {
      ...ticket,
      title: data.title,
      description: data.description,
      tried: data.tried,
      type: data.type,
      date: new Date().toISOString()
    }
    console.log(newTicket)
    dispatch(updateTicket(id, newTicket))
    handleClose();
   }

  return (
    <div className="TicketCard">
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="ticketForm" onSubmit={handleSubmit(onSubmit)}>
            <input name="title" defaultValue={title} ref={register} />
            <textarea name="description" defaultValue={description} ref={register} />
            <textarea name="tried" defaultValue={tried} ref={register} />
            <input name="type" defaultValue={type} ref={register} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </Modal>
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
        <ExpansionPanelActions className={classes.actions} onClick={handleOpen}>
          <FontAwesomeIcon icon={faEdit} className="EditButton"></FontAwesomeIcon>
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
