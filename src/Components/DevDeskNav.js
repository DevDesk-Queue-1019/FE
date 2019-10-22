import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import lambdaLogo from '../images/lambda-logo.png';
import DevDeskHome from './DevDeskHome';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import StudentLandingPage from './Student/StudentLandingPage';
import HelperLandingPage from './Helper/HelperLandingPage';
import PrivateRoute from './PrivateRoute';
import CreateTicket from './Student/CreateTicket';
import StudentLandingPage from './Student/StudentLandingPage';
import HelperLandingPage from './Helper/HelperLandingPage';

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
  },
  homepageLink: {
    boxSizing: 'border-box',
    paddingTop: '1.5%',
    textDecoration: 'none',
    color: '#FFF',
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
    <div>
    <div className={classes.root}>
        <Toolbar position='static'>
          <Typography variant="h6" className={classes.title}>
            <img src={lambdaLogo} alt='Lambda School Logo' className={classes.logo} />
            <Link to='/' className={classes.homepageLink}>Lambda DevDesk</Link>
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
            style={{top: '50px'}}
            open={open}
            onClose={handleClose}
            // anchorOrigin={{
            //   vertical: 'bottom',
            //   horizontal: 'right',
            // }}
          >
            <MenuItem onClick={handleClose} >
              <Link to='/student' className={classes.menuLinks}>
                Student DevDesk
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} >
              <Link to='/helper' className={classes.menuLinks}>
                Helper DevDesk
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to='/createticket' className={classes.menuLinks} >
                Create New Ticket
              </Link>
            </MenuItem>
          </Menu>           
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
<<<<<<< HEAD
      {/* <Route exact path='/' component={Home} /> */}
      <Route exact path='/signup' component={SignUpPage} />
      <Route exact path='/login' component={SignInPage}/>
      <Route exact path='/student' component={StudentLandingPage} />
      <Route exact path='/helper' component={HelperLandingPage} />
=======
      <Route exact path='/' component={DevDeskHome} />
      <Route path='/signup' component={SignUpPage} />
      <Route path='/login' component={SignInPage}/>
>>>>>>> 7893d75af5c68443634b35fac568430f25bd54c6
      <PrivateRoute path='/createticket' component={CreateTicket} />
      <PrivateRoute path='/student' component={StudentLandingPage} />
      <PrivateRoute path='/helper' component={HelperLandingPage} />
    </Switch>
    </div>
  )
}