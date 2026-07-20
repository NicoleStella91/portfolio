import './Footer.css';
import { NavLink } from 'react-router';
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

export default function Footer() {
    const { language } = useContext(LanguageContext);

    return (
        <footer>
            <div>
                <p>Copyright © {new Date().getFullYear()} Nicole Stella. All rights reserved.</p>
            </div>
            <div className="footer_nav">
                <NavLink to="/terms">{language === 'ITA' ? 'Termini e condizioni' : 'Terms and conditions'}</NavLink>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </div>
        </footer>
    )
}