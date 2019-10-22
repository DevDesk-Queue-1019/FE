import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
<<<<<<< HEAD
import DevDeskNav from './DevDeskNav';
import Helpdesk from '../images/helpdesk.jpg';
import '../index.css';
=======
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
>>>>>>> 7893d75af5c68443634b35fac568430f25bd54c6

const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 50px 20px;
  backgound-image: fixed;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 10px;
  }
`;

const StyledCaption = styled.div`
  width: 80%;
  h2 {
    font-size: 60px;
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

const DevDeskHome = () => (
<<<<<<< HEAD

  <StyledLandingPage>
    <DevDeskNav />
    <img src={Helpdesk} alt='help desk' className='helpdesk-img'/>
=======
  <div>
  <StyledLandingPage>
>>>>>>> 7893d75af5c68443634b35fac568430f25bd54c6
    <StyledMain>
      <StyledCaption>
        <h2>
          Lambda DevDesk Queue 
        </h2>
<<<<<<< HEAD
        <h6>We Answer All The Questions?</h6>
=======
        
        <h6>The answer to your questions</h6>
        <Link to="/signup">
          <button>Register</button>
        </Link>
>>>>>>> 7893d75af5c68443634b35fac568430f25bd54c6
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>SignUp</button>
        </Link>
      </StyledCaption>
    </StyledMain>

  </StyledLandingPage>
<<<<<<< HEAD

  

=======
    <Route path='/signup' component={SignUpPage} />
    <Route path='login' component={SignInPage} />
  </div>
>>>>>>> 7893d75af5c68443634b35fac568430f25bd54c6
);

export default DevDeskHome;