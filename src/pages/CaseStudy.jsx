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
                <section>
                    {project.paragraphs.map((paragraph) => (
                        <div key={paragraph.id}>
                            <h3>{paragraph.paragraphTitle[language]}</h3>
                            {paragraph.paragraphImage && (
                                <img src={paragraph.paragraphImage} className="paragraph-image" />
                            )}
                            <p>{paragraph.paragraphText[language]}</p>
                        </div>
                    ))}
                </section>
                <button onClick={() => window.open(project.link, "_blank")}>
                    {language === "ITA" ? "Vai al progetto" : "Go to project"}
                </button>
            </section>
            <Footer />
        </div>
    )
}