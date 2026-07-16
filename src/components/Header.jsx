import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { NavLink } from "react-router";
import "./Header.css";
import { BsTranslate } from "react-icons/bs";

export default function Header() {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <header>
            <section className="name">
                <NavLink to="/"><h1>Nicole Stella</h1></NavLink>
                <h2>Learning Experience Design | Game-Based Learning | Gamification</h2>
            </section>
            <nav>
                <ul>
                    <li><NavLink to="/about">{language === "ITA" ? "Chi sono" : "About"}</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">{language === "ITA" ? "Contatti" : "Contact"}</NavLink></li>
                    <li><button onClick={toggleLanguage}>{language === "ITA" ? "ENG" : "ITA"} <BsTranslate /></button></li>
                </ul>
            </nav>
        </header>
    );
}