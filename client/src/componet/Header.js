import React, {useState} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import '../App.css';
import logo from '../logo.svg';
{/* <img src={logo} className="App-logo" alt="logo" /> */
}

function Header(args) {

    return (
        <div>
            <Navbar {...args} className="" color="black" dark>
                <NavbarBrand className="d-inline-flex" href="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="link align-self-center">Multiversal</h2>
                </NavbarBrand>
                <Nav>
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
            </Navbar>
        </div>
    );
}

export default Header;