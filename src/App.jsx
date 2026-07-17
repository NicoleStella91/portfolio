import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import CaseStudy from './pages/CaseStudy';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio/" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Policy />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </>
  )
}

export default App
