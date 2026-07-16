import "./SelectedWork.css";    
import { useContext } from "react";
import { LanguageContext } from '../contexts/LanguageContext';
import { NavLink } from "react-router";
import capotreno from '/capotreno.png';
import ciak from '/ciak.png';


export default function SelectedWork() {
    const { language } = useContext(LanguageContext);
    return (
        <section className="selected-work-container">
            <h2>{language === 'ITA' ? 'Lavori Selezionati' : 'Selected Work'}</h2>
            <h3>{language === 'ITA' ? 'Una selezione di progetti che mostra il mio approccio al Learning Experience Design.' : 'A selection of projects that showcase my approach to Learning Experience Design.'}</h3>
            <section className="selected-work"> 
                <div className="work-card">
                    <h4>Destinazione Italiano</h4>
                    {/*<img src={capotreno} alt='Destinazione Italiano' />*/}
                <p>{language === 'ITA' ? 'Unità didattica digitale gamificata per studenti adulti di italiano L2 principianti assoluti.' : 'Gamified digital didactic unit for adult beginners in Italian L2.'}</p>
                <NavLink to='/portfolio/1'><button>Vai al case study</button></NavLink>
                </div>
                <div className="work-card">
                    <h4>Ciak!</h4>
                    {/*<img src={ciak} alt='Ciak' />*/}
                    <p>{language === 'ITA' ? 'Gioco da tavolo didattico con storytelling integrato per studenti adulti di italiano L2.' : 'Learning board game with integrated storytelling for adult Italian L2 learners.'}</p>
                    <NavLink to='/portfolio/2'><button>Vai al case study</button></NavLink>
                </div>
            </section>
        </section>
    )
}