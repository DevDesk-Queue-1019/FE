import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from '../PrivateRoute';
import CreateTicket from '../CreateTicket';
import MyTickets from './StudentTicketList';
import { useDispatch, useSelector } from "react-redux";
import { getStudentTickets, deleteTicket } from "../../actions";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// styled-components
import { 
    SearchButton, SearchContainer, SearchInput, 
    TicketHeaderContainer, TicketHeader, TicketCount, 
    HeaderButtons, FilterButtonsContainer, FilterButtons, CreateTicketButton } from '../styles/StyledStudentLandingPage';

const useStyles = makeStyles({
    card: {
      width: '50%',
      margin: '5%',

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    description: {
        width: '50%',
        marginBottom: '3%', 
    },
    descriptionSpan: {
        marginLeft: '10%',
    },
  });

const StudentLandingPage = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const studentTickets = useSelector(state => state.tickets.studentTickets);
    // console.log(studentTickets);
    const studentTicketCount = studentTickets.length;
    console.log(studentTicketCount);

    useEffect(() => {
        // const id = parseInt(localStorage.getItem('owner'));
        dispatch(getStudentTickets(parseInt(localStorage.getItem("owner"))))
    }, [dispatch]);
    return(
        <div>
            {/* Search Bar (not functional) */}
            <SearchContainer>
                <SearchInput placeholder="Search Tickets" type="text" />
                <SearchButton><strong>Search</strong></SearchButton>
            </SearchContainer>
            {/* Header */}
            <TicketHeaderContainer>
                <TicketHeader>My Tickets</TicketHeader>
                <TicketCount>({studentTicketCount} Tickets)</TicketCount>                
            </TicketHeaderContainer>
            {/* Header Buttons */}
                <HeaderButtons>
                    <CreateTicketButton>
                    <Link style={{textDecoration: 'none', color: '#FFF'}} to='/createticket'>Create Ticket</Link>                
                    </CreateTicketButton>
                    <FilterButtonsContainer>
                        <FilterButtons style={{borderRight: '1px solid #000'}} >All</FilterButtons>
                        <FilterButtons style={{borderRight: '1px solid #000'}} >Open</FilterButtons>
                        <FilterButtons>Closed</FilterButtons>                  
                    </FilterButtonsContainer>
                </HeaderButtons>                
             {/* Routes */}
            <PrivateRoute path='/createticket' component={CreateTicket} />
            <PrivateRoute path='/my_tickets' component={MyTickets} />
            {/* Tickets */}
            {
                studentTickets.map( ticket => {
                    // return <h1>{ ticket.title }</h1>
                    return (
                        <div className='student-ticket-container'>
                            <Card className={classes.card}>
                                <CardContent>
                                <Typography variant="h5" component="h2">
                                    {ticket.title}    
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {ticket.type}
                                </Typography>
                                <Typography className={classes.description} variant="body2" component="p">
                                    Description:<br />
                                        <span className={classes.descriptionSpan}>{ticket.description}</span>
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Tried:<br />
                                        <span className={classes.descriptionSpan}>{ticket.tried}</span>
                                </Typography>  
                               </CardContent>
                               <CreateTicketButton onClick={() => {
                                    dispatch(deleteTicket(ticket.id))}}>
                                        Delete ticket
                                </CreateTicketButton>
                            </Card>

                        </div>
                    );
                })
            }
        </div>
        // <StudentLandingPage />
    )

}

export default StudentLandingPage;
