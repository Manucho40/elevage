import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { Container, Navbar, Nav } from 'react-bootstrap';
const Header = () => {
    return ( 
        <>
            <header>
                <div className="headerUp">
                    <div className="logoContainer">
                        <img src={require("../assets/img/hancock_logo.png")} alt="" />
                    </div>
                    <div className="informations">
                        <div className="detailInf">
                        <FontAwesomeIcon className='icone' icon={faMapLocationDot} size="2x" />
                            <p>Angle rue J40 et J81 - Vallon II Plateaux - Cocody 06 BP 1051</p>
                        </div>
                        <div className="detailInf">
                        <FontAwesomeIcon className='icone' icon={faPhone} size="2x"/>
                            <p>(+225) 27 20 30 56 13 Appelez nous!</p>
                        </div>
                    </div>
                </div>
                <Navbar
                    collapseOnSelect="collapseOnSelect"
                    expand="lg"
                    className="mx-auto zindex"
                    variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                            <Nav className='border-dotted'>
                                <Nav.Link><Link to="/"><li className='lien'>Accueil</li></Link> </Nav.Link>
                                <Nav.Link><Link to="/apropos"><li className='lien'>A propos</li></Link></Nav.Link>
                                <Nav.Link><Link to="/Services"><li className='lien'>Services</li></Link></Nav.Link>
                                <Nav.Link><Link to="/Produits"><li className='lien'>Produits</li></Link></Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                           
                        </Navbar.Collapse>
                    </Container>
                </Navbar>               
      

            </header>
        </>
     );
}
 
export default Header;