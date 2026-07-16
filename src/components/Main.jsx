import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { data } from "../data";
import "./Main.css";

export default function Main({ page }) {
    const { language } = useContext(LanguageContext);
    const pageData = data[page];

    return (
        <main>
            <h2 className="tagline">{pageData.tagline[language]}</h2>
            {pageData.paragraphs.map((paragraph, index) => {
                const title = paragraph.paragraphTitle?.[language];
                const text  = paragraph.paragraphText?.[language];

                if (!title && !text) return null;

                return (
                    <section key={index} id={paragraph.id}>
                        {title && <h3>{title}</h3>}
                        {text  && <p>{text}</p>}
                    </section>
                );
            })}
        </main>
    );
}