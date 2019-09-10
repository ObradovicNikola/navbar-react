import React, { Component } from 'react'
import './componentsStyles/Navbar.css'
import { NavLink } from 'react-router-dom'
// for performance boost and convenience
// extends PureComponent instead shouldComponentUpdate
export default class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            mobileMenuShow: false,
            unhover: '',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.mobileMenuShow !== nextState.mobileMenuShow) {
            return true;
        }
        return false;
    }

    navClicked = (navCleaned) => {
        this.setState({
            unhover: 'no-hover'
        })
        setTimeout(navCleaned, 40);
    }

    navCleaned = () => {
        this.setState({
            unhover: ''
        })
    }

    toggleMenu = () => {
        this.setState({ mobileMenuShow: !this.state.mobileMenuShow })
    }

    closeMenu = () => {
        setTimeout(this.navClicked(this.navCleaned), 300)
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
                        <NavLink to="/react-navbar-hover" className="nav-link" onClick={this.closeMenu}>
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
                        <li className={this.state.unhover}>
                            <div className="nav-dropdown">HOME <i className="fas fa-caret-down"></i></div>
                            <div className="sub-menu-container">
                                <ul>
                                    <li>
                                        <NavLink to="/react-navbar-hover" exact={true} className="nav-link" activeClassName='is-active' onClick={this.closeMenu}>HOME 1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/react-navbar-hover" exact={true} className="nav-link" activeClassName='is-active' onClick={this.closeMenu}>HOME 2</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={this.state.unhover}>
                            <div className="nav-dropdown">MENU <i className="fas fa-caret-down"></i></div>
                            <div className="sub-menu-container">
                                <ul>
                                    <li>
                                        <NavLink to="/react-navbar-hover/menu" activeClassName='is-active' className="nav-link" onClick={this.closeMenu}>MENU 1</NavLink>
                                    </li>
                                    <li >
                                        <NavLink to="/react-navbar-hover/menu" activeClassName='is-active' className="nav-link" onClick={this.closeMenu}>MENU 2</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/react-navbar-hover/menu" activeClassName='is-active' className="nav-link" onClick={this.closeMenu}>MENU 3</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink to="/react-navbar-hover/contact" className="nav-link" activeClassName='is-active' onClick={this.closeMenu}>CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/react-navbar-hover/about" className="nav-link" activeClassName='is-active' onClick={this.closeMenu}>ABOUT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav >
        )
    }
}
