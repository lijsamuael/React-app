import { Nav,Navbar, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, } from 'reactstrap';
import '../App.css';
function Header(){
    return(
        <div className='header' color="info">
            <Nav tabs >
                <NavItem>
                    <NavLink href="#" active> Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" active> Sign up</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" active> Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" active> Profile</NavLink>
                </NavItem>
                   
            </Nav>
        </div>

    );
}
export default Header;