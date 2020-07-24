import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default function Navbar() {
    return (
        <div>
            <nav className="Navbar">
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
                </label>
                <label className="logo">MAXEON</label>
                <ul className="Nav-list">
                <li><Link className="active" to="/"  >Home</Link></li>
                <li><Link className="active" to="/Products"  >Products</Link></li>
                <li><Link to="/Feature">Features</Link></li>
                <li><Link to="/Cases">Use Cases</Link></li>
                <li><Link to="/Pricing">Pricing</Link></li>
                <li>
                <Button variant="light" className="btn1">Login  
                </Button>
                </li>
                </ul>
            </nav>
        </div>
    )
}
