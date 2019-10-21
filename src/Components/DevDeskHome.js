import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DevDeskNav from './DevDeskNav';

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
    background: #BB1331;
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

const StyledHeroImage = styled.div`
width: 50%;
  img {
    max-width: 100%;
    width: auto;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const DevDeskHome = () => (
  <StyledLandingPage>
    <DevDeskNav />
    <StyledMain>
      <StyledCaption>
        <h2>
          Lambda DevDesk Queue: 
        </h2>
        <h6>We Answer All The Questions?</h6>
        <Link to="/join">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </StyledCaption>

      <StyledHeroImage>
        <img src="src\img\lambda-school-vector-logo.png" alt="queue" />
      </StyledHeroImage>
    </StyledMain>
  </StyledLandingPage>
);

export default DevDeskHome;