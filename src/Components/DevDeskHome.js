import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';


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
  
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 10px;
  }
`;

const StyledCaption = styled.div`

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
  <div>
  <StyledLandingPage>
    <StyledMain>
      <StyledCaption>
        <h2>
          Lambda DevDesk Queue 
        </h2>
        
        <h6>The answer to your questions</h6>
        <Link to="/signup">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </StyledCaption>
    </StyledMain>

  </StyledLandingPage>
    <Route path='/signup' component={SignUpPage} />
    <Route path='login' component={SignInPage} />
  </div>
);

export default DevDeskHome;