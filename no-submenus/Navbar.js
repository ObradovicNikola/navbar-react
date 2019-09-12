import React, { Component } from 'react'
import './style/Navbar.css'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            mobileMenuShow: false
        }
    }
    toggleMenu = () => {
        this.setState({ mobileMenuShow: !this.state.mobileMenuShow })
    }

    render() {
        let menu;
        if (this.state.mobileMenuShow)
            menu = "menu menu-mobile animated fadeInDown"
        else menu = "menu"
        return (
            <nav id="navigation">
                <div className="logo-container" style={{}}>
                    <div className="logo" id="logo">
                        <NavLink to="/" className="nav-link">
                            <img src={`${process.env.PUBLIC_URL}/images/phoenixLogo.png`} width="50" height="43" alt="logo" />
                            <p>Restaurant Phoenix</p>
                        </NavLink>
                    </div>
                    <div className="burger" onClick={this.toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
                <div className="menu-container">
                    <ul className={menu}>
                        <li>
                            <NavLink to="/" exact={true} className="nav-link" activeClassName='is-active'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" activeClassName='is-active' className="nav-link">MENU</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="nav-link" activeClassName='is-active'>CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-link" activeClassName='is-active'>ABOUT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav >
        )
    }
}