import React, { useContext } from 'react'
import "./Header.css"
import { ThemeContext } from '../context/ThemeContext' // To‘g‘rilandi

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // To‘g‘rilandi

    return (
        <header className={`shadow ${theme}`}>
            <div className="container py-5">
                <h3>Project name</h3>
                <button className='btn btn-dark' onClick={toggleTheme}>
                    {theme === "light" ? "Dark mode" : "Light mode"}
                </button>
            </div>
        </header>
    )
}

export default Header;
