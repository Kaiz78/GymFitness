import LanguageSelector from "./languageSelector"
import  {useState, useEffect} from 'react';

import {translate} from "../i18n";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

/**
 * Code DarkMode 
 * https://codesandbox.io/p/sandbox/create-dark-mode-in-react-js-using-redux-hooks-7xiqp?file=%2Fsrc%2FApp.js&from-embed=
*/

export default function Navbar() {

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

  const {language} = useSelector((state: RootState) => state.lang);  
  let content = translate('page', language) as any

  console.log(content)
  return (
    <header className={`headerMain ${scroll ? 'sticky top-0 bg-white shadow-lg' : ''}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Gym Fitness</h1>
        <button onClick={toggleNav} className="text-gray-800 block md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        
        <div className={`hidden-md items-center text-center`}>
          <a href="#home" className="text-gray-600 hover:text-gray-800 mx-2">Accueil</a>
          <a href="#about" className="text-gray-600 hover:text-gray-800 mx-2">À propos</a>
          <a href="#services" className="text-gray-600 hover:text-gray-800 mx-2">Services</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-800 mx-2">Témoignages</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 mx-2">Contact</a>
          
          <button><LanguageSelector /></button>
        </div>
      </nav>

      <div className={`${isNavOpen ? 'flex flex-col items-center' : 'hidden'} md:hidden`} >    
      <a href="#home" className="text-gray-600 hover:text-gray-800 py-2">Accueil</a>
          <a href="#about" className="text-gray-600 hover:text-gray-800 py-2">À propos</a>
          <a href="#services" className="text-gray-600 hover:text-gray-800 py-2">Services</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-800 py-2">Témoignages</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 py-2">Contact</a>
          <button className="mb-2"><LanguageSelector /></button>
      </div>
    </header>

  )
}
