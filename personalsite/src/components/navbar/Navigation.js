import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const NavigationBar = styled.nav`
  background: #2493f7;
  height: 75px;
  display: flex;
  justify-content: space-between;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  opacity: 0.6;
  :hover {
    transition-delay: .1s; /* delays for 1 second */
    -webkit-transition-delay: .1s;
    opacity: 1;
  }
  &.active {
    color: #ffffff;
  }
  
`;