import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import lambdaLogo from '../images/lambda-logo.png';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import StudentLandingPage from './Student/StudentLandingPage';
import HelperLandingPage from './Helper/HelperLandingPage';
import PrivateRoute from './PrivateRoute';
import CreateTicket from './CreateTicket';

import styled from 'styled-components';

// Styling
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#14121F',
    color: '#FFF'
  },
  navLinks: {
    textDecoration: 'none',
    color: '#FFF',
    fontSize: '1.1rem',
    boxSizing: 'border-box',
    padding: '0 7px 0 7px',
    '&:hover': {
      color: '#BA112E'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    fontSize: '1.4rem',
  },
  logo: {
    height: '20%',
    margin: '1% 1% 0 0',
  },
  menuLinks: {
    textDecoration: 'none',
    color: '#000',
      '&:hover': {
        color: '#BA112E'
      }
  }
}));

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  padding: 0px 20px;
  backgound-image: fixed;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 10px;
  }
`;

const StyledCaption = styled.div`
  width: 45%;
  h2 {
    font-size: 40px;
    line-height: 50px;
  }
  h6 {
    font-size: 24px;
    margin: 20px 0;
  }
  a button {
    margin: 20px 25px 20px 0;
    background: #13131f;
    color: #fdfdfd;
    font-size: 15px;
    width: 120px;
    height: 40px;
    border: 1px solid black;
    border-radius: 3px;
  }
  a button:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    text-align: center;
    h2 {
      font-size: 30px;
      line-height: 40px;
    }
  }
`;

// App
export default function App() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
    <div className={classes.root}>
        <Toolbar position='static'>
          <Typography variant="h6" className={classes.title}>
            <img src={lambdaLogo} alt='Lambda School Logo' className={classes.logo} />
            <p>Lambda DevDesk</p>
          </Typography>
          <div>
          <Link to='/login' className={classes.navLinks}>Login</Link>
          |
          <Link to='/signup' className={classes.navLinks}>SignUp</Link>
          <IconButton className={classes.menuButton} aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick} color="inherit" aria-label="menu">
            <MenuIcon />
        
          </IconButton>
          <Menu
            id='nav-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            {/* <MenuItem><Link to='/home' className={classes.menuLinks}>Home</Link></MenuItem> */}
            <MenuItem><Link to='/student' className={classes.menuLinks}>Student DevDesk</Link></MenuItem>
            <MenuItem><Link to='/helper' className={classes.menuLinks}>Helper DevDesk</Link></MenuItem>
            <MenuItem><Link to='/createticket' className={classes.menuLinks}>Create New Ticket</Link></MenuItem></Menu>           
          </div>
        </Toolbar>

        <div>  
          <StyledMain>
            <StyledCaption>
              <h2>DevDesk Queue:</h2>
              <h6>We Answer All The Questions?</h6>
            </StyledCaption>
          </StyledMain>
        </div>  
      

    </div>
    <Switch>
      {/* <Route exact path='/' component={Home} /> */}
      <Route exact path='/signup' component={SignUpPage} />
      <Route exact path='/login' component={SignInPage}/>
      <Route exact path='/student' component={StudentLandingPage} />
      <Route exact path='/helper' component={HelperLandingPage} />
      <PrivateRoute path='/createticket' component={CreateTicket} />
    </Switch>
    </Router>
  );
}