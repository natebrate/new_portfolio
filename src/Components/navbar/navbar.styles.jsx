import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ToggleButton = styled.div`
  @media (max-width: 768px) {
      margin-right: 15px;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 25px;
  top: 0;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 56px;
  width: 56px;
  display: inline-flex;
  position: absolute;
  left: 91px;
  padding: 15px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
  @media screen and (min-width: 769px){
    margin-left: 5px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
      display: none;
  }
`;

export const OptionLink = styled(Link)`
  padding: 11px 17px 10px 18px;
  margin-right: 15px;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: #18D8F4;
  width: 126px;
  height: fit-content;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #ffffff;
  word-wrap: break-word;
  &:hover {
    text-decoration: none;
    color: #0f0956;
    font-weight: bold;
    font-family: Roboto;
  }
`;

export const OptionLink2 = styled(Link)`
  padding: 11px 35px 10px 36px;
  margin-right: 13px;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: rgba(5, 111, 172, 1);
  width: 126px;
  height: fit-content;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  word-wrap: break-word;
  &:hover {
    text-decoration: none;
    color: #ffffff;
    font-family: Roboto;
    font-weight: bold;
  }
`;