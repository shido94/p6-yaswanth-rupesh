import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link style={{textDecoration: 'none'}} to="/">
                    Shortly
                </Link>
            </h1>
            
            <p>
                <Link  style={{textDecoration: 'none'}} to="/contact">
                    Contact
                </Link>
            </p>
            
        </div>
    )
}
