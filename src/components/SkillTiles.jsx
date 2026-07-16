import "./SkillTiles.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const skills = [
    {
        letter: "I",
        labelITA: "Instructional Design",
        labelENG: "Instructional Design",
        descITA: "Progetto percorsi formativi efficaci, partendo dall'analisi dei bisogni fino alla valutazione degli apprendimenti.",
        descENG: "I design effective learning paths, from needs analysis to learning assessment.",
    },
    {
        letter: "C",
        labelITA: "Approccio Comunicativo",
        labelENG: "Communicative Approach",
        descITA: "Insegno italiano L2 con un approccio comunicativo, mettendo al centro l'interazione autentica e il contesto reale.",
        descENG: "I teach Italian L2 using a communicative approach, centring authentic interaction and real-world context.",
    },
    {
        letter: "G",
        labelITA: "Gamification",
        labelENG: "Gamification",
        descITA: "Ho dedicato il progetto finale del mio Master alla gamification applicata all'acquisizione linguistica, con l'obiettivo di rendere l'apprendimento coinvolgente.",
        descENG: "My Master's final project focused on gamification applied to language acquisition, with the goal of making learning engaging.",
    },
    {
        letter: "H",
        labelITA: "HTML, CSS, React",
        labelENG: "HTML, CSS, React",
        descITA: "Sviluppo applicazioni web interattive con React, incluso questo portfolio.",
        descENG: "I build interactive web applications with React — including this portfolio.",
    },
];

export default function SkillTiles() {
    const { language } = useContext(LanguageContext);
    
    return (
        <section
            className="skill-tiles"
            aria-label={language === "ITA" ? "Competenze" : "Skills"}
        >
            {skills.map((skill) => (
                <article key={skill.letter} className="tile">
                    <div className="tile__inner">
                        <span className="tile__letter" aria-hidden="true">
                            {skill.letter}
                        </span>
                        <div className="tile__content">
                            <span className="tile__label">
                                {language === "ITA" ? skill.labelITA : skill.labelENG}
                            </span>
                            <p className="tile__desc">
                                {language === "ITA" ? skill.descITA : skill.descENG}
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}