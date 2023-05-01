import React, {useState, useEffect} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import '../App.css';
import logo from '../logo.svg';

function Header(args) {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 576);

    useEffect(() => {
      const handleResize = () => {
        setIsOpen(window.innerWidth >= 576);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} className="navbar navbar-expand-sm" color="black" dark>
                <NavbarBrand className="d-inline-flex" href="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="link align-self-center">Multiversal</h2>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink disabled href="#">
                                More
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink disabled href="#">
                                Coming
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink disabled href="#">
                                Soon
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://discord.gg/fUyK8Z96EU"
                                target="_blank"
                                rel="noreferrer noopener">
                                <a className='link'>Discord Link</a>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;