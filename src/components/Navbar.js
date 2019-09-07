import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './componentsStyles/Navbar.css'

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

    closeMenu = () => {
        this.setState({ mobileMenuShow: false })
    }

    render() {
        let menu;
        if (this.state.mobileMenuShow)
            menu = "menu menu-mobile animated fadeInDown"
        else menu = "menu"
        return (
            <nav>
                <div style={{ display: 'flex' }}>
                    <div className="logo">
                        <Link to="/" className="nav-link" onClick={this.closeMenu}>
                            <img src={`${process.env.PUBLIC_URL}/images/phoenixLogo.png`} width="50" height="50" alt="logo" />
                            <p>Restaurant Phoenix</p>
                        </Link>
                    </div>
                    <div className="burger" onClick={this.toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
                <ul className={menu}>
                    <li>
                        <Link to="/" className="nav-link" onClick={this.closeMenu}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="nav-link" onClick={this.closeMenu}>MENU</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link" onClick={this.closeMenu}>CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link" onClick={this.closeMenu}>ABOUT</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
