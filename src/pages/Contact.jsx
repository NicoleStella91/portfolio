import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { AiFillLinkedin } from "react-icons/ai";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div>
            <Header />
            <Main page="contact" />
            <ContactForm />
            <Link to="https://www.linkedin.com/in/nicole-stella-5862728a/" style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px"}}>
                <AiFillLinkedin style={{ fontSize: "4rem" }} />
            </Link>
            <Footer />
        </div>
    )
}