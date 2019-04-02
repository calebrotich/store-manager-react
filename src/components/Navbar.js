import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import '../public/css/main.css';

const NavigationComponent = () => (
    <div>
      <Container>
        <Menu pointing secondary>
          <Menu.Menu id="loginhead">
            <NavLink to="/">
              <Menu.Item className="navlinks" name="Home" />
            </NavLink>
            <NavLink to="/login">
                <Menu.Item className="navlinks" name="Login" />
            </NavLink>
            
            <NavLink to="/about">
              <Menu.Item className="navlinks"
                name="About"
              />
            </NavLink>
          </Menu.Menu>        
        </Menu>
      </Container>
    </div>
  );

export default NavigationComponent;