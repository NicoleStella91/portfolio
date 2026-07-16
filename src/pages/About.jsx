import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import nicole from "../../public/nicole.jpg";
import SkillTiles from "../components/Skilltiles";
import Timeline from "../components/Timeline";

export default function About() {
    return (
        <div className="page">
            <Header />
            <img src={nicole} alt="Nicole Stella" style={{width: '240px', marginTop: '20px', borderRadius: '8px'}} />
            <Main page="about" />
            <SkillTiles />
            <Timeline />
            <Footer />
        </div>
    )
}