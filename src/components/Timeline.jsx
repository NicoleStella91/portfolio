import { data } from "../data";
import "./Timeline.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { NavLink } from "react-router";

export default function Timeline() {
    const timelineData = data.timeline;
    const { language } = useContext(LanguageContext);

    return (
        <section className="timeline">
            <h2>{timelineData.tagline[language]}</h2>
            <div className="timeline-container">
                {timelineData.paragraphs.map((paragraph) => (
                    <div key={paragraph.id} className="timeline-item">

                        {/* colonna sinistra: data */}
                        <span className="timeline-date">
                            {paragraph.paragraphTitle[language]}
                        </span>

                        {/* colonna centrale: pallino + linea */}
                        <div className="timeline-axis">
                            <div className="timeline-dot"></div>
                        </div>

                        {/* colonna destra: descrizione */}
                        <NavLink to={paragraph.link}><p className="timeline-text">
                            {paragraph.paragraphText[language]}
                        </p></NavLink>

                    </div>
                ))}
            </div>
        </section>
    );
}