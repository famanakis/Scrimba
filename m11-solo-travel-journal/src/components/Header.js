import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src={require ("../images/world-icon.png")} alt="world icon" className="nav-logo"/>
                <h1 className="nav-title">Farrah's Travel Journal</h1>
            </nav>
        </header>
    )
}