import { Navbar, NavbarBrand} from 'reactstrap';


function App() {
  return (
    <div className="App">
      <Navbar dark color="info">
        <div className="container">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarBrand href="/">Sign up</NavbarBrand>
          <NavbarBrand href="/">Login</NavbarBrand>
          <NavbarBrand href="/">Profile</NavbarBrand>
          <NavbarBrand href="/">About</NavbarBrand>
        </div>
      </Navbar>
    </div> 
  );
}

export default App;
