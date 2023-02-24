import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src={require ("../images/world-icon.png")} alt="world icon" className="nav-logo"/>
                <h6 className="nav-title">Farrah's Travel Journal</h6>
            </nav>
        </header>
    )
}