import React from 'react';
import {
    NavigationBar,
    NavigationMenu,
    NavigationLink,
    Bars,
} from './Navigation';

const Navigation = () => {
    return (
        <>
          <NavigationBar>
              <Bars />
              <NavigationMenu>
                  <NavigationLink to='/home' activeStyle>
                      Home
                  </NavigationLink>
                  <NavigationLink to='/projects' activeStyle>
                      Projects
                  </NavigationLink>
                  <NavigationLink to='/courses' activeStyle>
                      Revelant Coursework
                  </NavigationLink>
              </NavigationMenu>
          </NavigationBar>
        </>
    );
};

export default Navigation;