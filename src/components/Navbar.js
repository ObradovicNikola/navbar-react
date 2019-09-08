import React, { Component } from 'react'
import './componentsStyles/Navbar.css'
import { NavLink } from 'react-router-dom'
export default class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            mobileMenuShow: false,
            unhover: ''
        }
    }

    navClicked = (navCleaned) => {
        this.setState({
            unhover: 'no-hover'
        })
        setTimeout(navCleaned, 500);
    }

    navCleaned = () => {
        this.setState({
            unhover: ''
        })
        console.log('nav cleaned')
    }

    toggleMenu = () => {
        this.setState({ mobileMenuShow: !this.state.mobileMenuShow })
    }

    closeMenu = () => {
        this.navClicked(this.navCleaned)
        this.setState({ mobileMenuShow: false })
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
                        <NavLink to="/" className="nav-link" onClick={this.closeMenu}>
                            <img src={`${process.env.PUBLIC_URL}/images/phoenixLogo.png`} width="50" height="50" alt="logo" />
                            <p>Restaurant Phoenix</p>
                        </NavLink>
                    </div>
                    <div className="burger" onClick={this.toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
                <div className="menu-container">
                    <ul className={menu}>
                        <li className={this.state.unhover}>
                            <div className="nav-dropdown">HOME <i className="fas fa-caret-down"></i></div>
                            <div className="sub-transit">
                                <ul className="sub-menu-home" >
                                    <li>
                                        <NavLink to="/" exact={true} className="nav-link" activeClassName='is-active' onClick={this.closeMenu}>HOME 1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" exact={true} className="nav-link" activeClassName='is-active' onClick={this.closeMenu}>HOME 2</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={this.state.unhover}>
                            <div className="nav-dropdown">MENU <i className="fas fa-caret-down"></i></div>
                            <ul className="sub-menu-menu">
                                <li>
                                    <NavLink to="/menu" activeClassName='is-active' className="nav-link" onClick={this.closeMenu}>MENU 1</NavLink>
                                </li>
                                <li>
                                    <div to="/menu" className="nav-dropdown">MENU 2 <i className="fas fa-caret-right"></i></div>
                                    <ul className="sub-sub-menu-menu">
                                        <li>
                                            <NavLink to="/menu" activeClassName='is-active' className="nav-link" onClick={this.closeMenu}>SPRING</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/menu" activeClassName='is-active' className="nav-link" onClick={this.closeMenu}>SUMMER</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/menu" activeClassName='is-active' className="nav-link" onClick={this.closeMenu}>AUTUMN</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/menu" activeClassName='is-active' className="nav-link" onClick={this.closeMenu}>WINTER</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/menu" activeClassName='is-active' className="nav-link" onClick={this.closeMenu}>MENU 3</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/contact" className="nav-link" activeClassName='is-active' onClick={this.closeMenu}>CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-link" activeClassName='is-active' onClick={this.closeMenu}>ABOUT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav >
        )
    }
}
