import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse} from 'reactstrap';
import './App.css';
import Menu from './components/Menu'
function App( props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  
  return (
    <div className="App">
      <Navbar dark color="info" className='navbar' >
        <div className="links">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarBrand href="/">Profile</NavbarBrand>
          <NavbarBrand href="/">About</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" /> 
          <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">Sign up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Login</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="#">Logout</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
    
        </div>
      </Navbar>
      <Menu />
    </div> 
  );
}

export default App;
