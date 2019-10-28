import React, { useEffect } from "react";
import TicketCard from "./TicketCard";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../actions";
import "../../App.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const HelperLandingPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets.tickets);
  const loading = useSelector(state => state.tickets.loading);

  const [selection, setSelection] = React.useState("");

  const handleChange = event => {
    setSelection(event.target.value);
  };

  useEffect(() => {
    dispatch(getTickets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="hd-img2">
      <div className="Menu">
        <h1>{localStorage.getItem("welcome")}</h1>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select onChange={handleChange} value={selection}>
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"HTML"}>HTML</MenuItem>
            <MenuItem value={"CSS"}>CSS</MenuItem>
            <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
            <MenuItem value={"React"}>React</MenuItem>
            <MenuItem value={"Node.js"}>Node.js</MenuItem>
          </Select>
        </FormControl>

        {!loading ? (
          tickets.map(ticket => {
            return (
              <TicketCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                description={ticket.description}
                tried={ticket.tried}
                type={ticket.type}
              />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default HelperLandingPage;
