import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Icons = styled.a`
  color: #000000;
  display: flex;
  align-items: right;
  text-decoration: none;
  padding: 0 .5rem;
  opacity: 0.5;
  :hover {
    transition-delay: .1s; /* delays for 1 second */
    -webkit-transition-delay: .1s;
    opacity: 1;
  }
  &.active {
    opacity: 1;
  }
`;

export const NavigationBar = styled.nav`
  background: #2493f7;
  height: 75px;
  display: flex;
  justify-content: right;

`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavigationLink = styled(NavLink)`
  color: #000000;
  display: flex;
  font-weight: bold;
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
    opacity: 1;
  }
  
`;