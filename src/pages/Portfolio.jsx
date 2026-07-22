import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Portfolio.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { portfolio } from "../portfolio";
import { NavLink } from "react-router";

export default function Portfolio() {
    const { language } = useContext(LanguageContext);

    return (
        <div>
            <Header />
            <section className="portfolio-container">
                <h2>Portfolio</h2>
                {portfolio.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.name}</h3>
                        <div className="tags">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                        <p>{project.description[language]}</p>
                        <img src={project.image} alt={project.name} className="project-img"/>
                        <NavLink to={`/portfolio/${project.id}`} className="case-study-link">
                            {language === "ITA" ? "Vai al case study" : "Go to case study"}
                        </NavLink>
                        {project.link != "" && 
                            <button onClick={() => window.open(project.link, "_blank")}>
                                {language === "ITA" ? "Vai al progetto" : "Go to project"}
                            </button>
                        }
                    </div>
                ))}
            </section>
            <Footer />
         </div>
    )
}