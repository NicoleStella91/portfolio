import { useParams } from "react-router";
import { portfolio } from "../portfolio";
import "./CaseStudy.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function CaseStudy() {
    const param = useParams();
    const project = portfolio.find((p) => p.id === parseInt(param.id));
    const { language } = useContext(LanguageContext);

    return (
        <div>
            <Header />
            <section className="case-study">
            <h2>{project.name} | Case study</h2>
            <img src={project.image} className="project-image" />
                {project.roles && project.tools && (
                    <div className="roles_tools">
                        <div className="roles_tools_section">
                            <h3>{language === "ITA" ? "I miei ruoli nel progetto" : "My roles in the project"}</h3>
                            {project.roles.map((role, index) => (
                                <span key={index} className="role">{role}</span>
                            ))}
                        </div>
                        <div className="roles_tools_section">
                            <h3>{language === "ITA" ? "Gli strumenti utilizzati" : "Tools used"}</h3>
                            {project.tools.map((tool, index) => (
                                <span key={index} className="tool">{tool}</span>
                            ))}
                        </div>
                    </div>
                )}
                <div className="case_study_nav"> 
                    <h3>{language === "ITA" ? "Contenuti" : "Contents"}</h3>
                    <ul>
                        {project.paragraphs.map((paragraph) => (
                            <li key={paragraph.id}>
                                <a href={`#${paragraph.anchor}`}>
                                    {paragraph.paragraphTitle[language]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <section>
                    {project.paragraphs.map((paragraph) => (
                        <div key={paragraph.id} id={paragraph.anchor}>
                            <h3 className="paragraph_title">{paragraph.paragraphTitle[language]}</h3>
                            {paragraph.paragraphImage && (
                                <img src={paragraph.paragraphImage} className="paragraph-image" />
                            )}
                            <p>{paragraph.paragraphText[language]}</p>
                        </div>
                    ))}
                </section>
                {project.link != "" && 
                    <button className="case-study-link" onClick={() => window.open(project.link, "_blank")}>
                        {language === "ITA" ? "Vai al progetto" : "Go to project"}
                    </button>
                }
            </section>
            <Footer />
        </div>
    )
}