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
            <div>
                <NavLink to="/privacy-policy">{language === 'ITA' ? 'Termini e condizioni' : 'Terms and conditions'}</NavLink>
            </div>
        </footer>
    )
}