import React, { Component } from 'react';
import { Menu } from "./Menu"
import './Navbar.css'
import { Button } from "../Button"


class Navbar extends Component {
    state = { active: false}
    state = { setButton: false}

    handleClick = () => {
        this.setState({ active: !this.state.active })
    }

    showButton = () => {
       if(window.innerWidth<=960) {
           this.setState({ setButton: false })
       } else {
            this.setState({ setButton: true })
       }
    }

   
    render() {
        return(
            <nav className="NavbarItem">
                <img src="logo.png" width="70" height="80" ></img>
                <h1 className="NavbarLogo">DYNE</h1>
                <div className="menuIcon" onClick={this.handleClick}>
                    <i className={this.state.active ? 'fas fa-times' : 'fas fa-hamburger'}></i>
                    
                </div>
                <ul className = {this.state.active ? 'nav-menu active' : 'nav-menu'}>
                    { Menu.map((item, index) => {
                        return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}> 
                            {item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
                <Button>Contact Us</Button>
             
            </nav>
        )
    }
}

export default Navbar

