import LanguageSelector from "./languageSelector"
import  {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

/**
 * Code DarkMode 
 * https://codesandbox.io/p/sandbox/create-dark-mode-in-react-js-using-redux-hooks-7xiqp?file=%2Fsrc%2FApp.js&from-embed=
*/

export default function navbar() {

  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };


  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <header className={`headerMain ${scroll ? "sticky" : ""}`}>
      <nav className={`navbar navbar-expand-lg navbar-light${isNavOpen ? ' show' : ''}`}>        
        <div className="container d-flex">
          <Link to="/" className="navbar-brand">
            <img src="logo.svg" alt="Logo" className="w-50" /> 
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse  ${isNavOpen ? ' show text-center' : ''}`}id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">À propos</Link>
              </li>
              <li className="nav-item">
                <Link to="/involve" className="nav-link">Implication</Link>
              </li>
              <li className="nav-item">
                <Link to="/donate" className="nav-link">Dons</Link>
              </li>
              <li className="nav-item">
                <Link to="/resource" className="nav-link">Ressource</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <LanguageSelector />
          </div>
        </div>
      </nav>

      
    </header>
  )
}
