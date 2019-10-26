import styled from 'styled-components';

export const SearchButton = styled.button`
    margin-right: 3%;
    margin-left: 1%;
    box-sizing: border-box;
    height: 50%;
    width: 7%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 0.8rem;
    text-align: center;
    color: #FFF;
    background: #BB1333;
    margin-top: 2%;
    border-radius: 5px;
`;

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #f0f4f7;
  font-size: 2.2em;
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SearchInput = styled.input`
    width: 410px;

    margin-top: 2%;
    box-sizing: border-box;
    padding: 10px; 
`;

export const TicketHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-top: 35px;
`;

export const TicketHeader = styled.h1`
  font-size: 4rem;
  margin: 0%;
`;

export const TicketCount = styled.div`
    margin-left: 1%;
    font-size: 1.3rem;
`;

export const HeaderButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 5%;
`;
export const FilterButtonsContainer = styled.div`
    display: flex;
    text-align: center;
    background: #BB1333;
    border: 1px solid #000;
    margin-top: 2%;
`;
export const FilterButtons = styled.div`
    width: 85px;
    box-sizing: border-box;
    padding: 7px;
    color: #FFF;
`;
export const CreateTicketButton = styled.div`
    text-align: center;
    color: #FFF;
    background: #BB1333;
    width: 115px;
    box-sizing: border-box;
    padding: 7px;
    border: 1px solid #000;
    cursor: pointer;
`;