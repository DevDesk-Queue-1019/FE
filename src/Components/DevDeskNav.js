import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHome = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #BB1331;
  padding: 7px 15px;
  border-bottom: 1px solid #777777;
  div {
    display: flex;
    align-items: center;
  }
  div img {
    width: 50px;
    height: 50px;
  }
  div h1 {
    font-size: 20px;
  }
  div a {
    margin: 0 10px;
    font-size: 14px;
  }
  div a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 500px) {
    div h1 {
      display: none;
    }
  }
`;

const DevDeskNav = () => (
  <StyledHome>

    <Link to="/">
      <div>
        <img src="./src/img/lamdashield.png" alt="logo" />

        <h1>DevDesk Queue</h1>
      </div>
    </Link>

    <div>      
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </div>

  </StyledHome>
);

export default DevDeskNav;