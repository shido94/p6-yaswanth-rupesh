import React from 'react';
import { Link } from 'react-router-dom';


const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "fixed",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
  }

export default function Footer() {
    return (
        <div>
            <p className="text-center" style={ FooterStyle }>Designed & coded by -  
                <Link  style={{textDecoration: 'none'}} to="/contact">
                      Rupesh Yadav
                </Link>
            </p>
        </div>
    )
}
