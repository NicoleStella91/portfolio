import { LanguageContext } from "../contexts/LanguageContext";
import { useContext, useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "deb8a8c6-efd4-41a1-91a9-0133cf26efe6");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    const { language } = useContext(LanguageContext);

    return (
        <div className="form-container">
            <form className="contact" onSubmit={onSubmit}>
                <h2>{language === "ITA" ? "Scrivimi" : "Send me a message"}</h2>
                <div className="input-box">
                    <label>{language === "ITA" ? "Nome" : "Name"}</label>
                    <input className="field" type="text" name="name" placeholder={language === "ITA" ? "Il tuo nome" : "Your name"} required />
                </div>
                <div className="input-box">
                    <label>{language === "ITA" ? "Indirizzo email" : "Email address"}</label>
                    <input className="field" type="email" name="email" placeholder={language === "ITA" ? "Il tuo indirizzo email" : "Your email address"} required />
                </div>
                <div className="input-box">
                    <label>{language === "ITA" ? "Messaggio" : "Message"}</label>
                    <textarea className="field" name="message" placeholder={language === "ITA" ? "Il tuo messaggio" : "Your message"} required></textarea>
                </div>
                <button type="submit">{language === "ITA" ? "Invia" : "Send"}</button>
                <p>{result}</p>
            </form>
        </div>
    )
}