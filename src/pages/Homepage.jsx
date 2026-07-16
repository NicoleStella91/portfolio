import Header from "../components/Header";
import HomepageNav from "../components/HomepageNav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import logo from "../../public/logo.svg";
import "./Homepage.css";
import SelectedWork from "../components/SelectedWork";

export default function Homepage() {
    return (
        <div className="page">
            <Header />
            <section className="homepage-main">
                <Main page="homepage" />
                <img src={logo} alt="Logo" style={{width: '200px'}} />
            </section>
            <HomepageNav />
            {/*<SelectedWork />*/}
            <Footer />
        </div>
    )
}
