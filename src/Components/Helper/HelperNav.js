  
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import lambdaLogo from '../../images/lambda-logo.png';


const StyledHelperNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #14121F;
  padding: 7px 15px;
  border-bottom: 1px solid #777777;
  margin-bottom: 20px;
  
  div {
    display: flex;
    align-items: center;
  }
  div img {
    width: 50px;
    height: 50px;
    padding-left: 10px;
  }
  div h1 {
    font-size: 1.5rem;
    padding-left: 20px;
    color: white;
  }
  div a {
    margin: 0 10px;
    font-size: 14px;
    text-decoration: none;
  }
  div a:hover {
    text-decoration: underline;
  }
  div a img {
    width: 30px;
    height: 30px;
    
  }

  @media screen and (max-width: 600px) {
    div h1 {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    div a {
      margin: 0 5px;
      font-size: 11px;
    }
    div a img {
      margin: 0;
    }
  }
`;

const HelperNav = () => {
  const handleLogout = () => localStorage.clear();

  return (
    <StyledHelperNav>
      <Link to="/home">
        <div>
          <img src={lambdaLogo} alt="logo" />

          <h1>Lambda DevDesk - Helper Portal</h1>
        </div>
      </Link>

      <div>
        <NavLink to="/open_tickets">
          <h1>Open Tickets</h1>
        </NavLink>
        <NavLink to="/my_tickets">
          <h1>My Tickets</h1>
        </NavLink>
        <Link to="/">
          <h1>Exit</h1>
        </Link>
      </div>
    </StyledHelperNav>
  );
};

export default HelperNav;