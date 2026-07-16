import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import { NavLink } from "react-router";
import "./HomepageNav.css";

export default function HomepageNav() {
    const { language } = useContext(LanguageContext);
    return (
        <nav className="homepage-nav-section">
            <ul className="homepage-nav">
                <NavLink to="/portfolio"><li className="homepage-nav-link">{language === 'ITA' ? 'Esplora il mio portfolio': 'Explore my portfolio'}</li></NavLink>
            </ul>
        </nav>
    )
}