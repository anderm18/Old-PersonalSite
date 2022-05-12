import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavigationBar = styled.nav`
  background: #2493f7;
  height: 75px;
  display: flex;
  justify-content: space-between;

`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavigationLink = styled(NavLink)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
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