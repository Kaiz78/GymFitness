// LanguageSelector.tsx
import  {useState, useEffect} from "react";
import { Icon } from "@iconify/react";

import { useDispatch} from 'react-redux';

import { setLanguage } from "../store/actions/langAction";



const LanguageSelector = () => {
  const dispatch = useDispatch();


  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(localStorage.getItem("language") || "FR")

  useEffect(() => {
    // Enregistrez la langue sélectionnée dans le localStorage
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language:string) => {
    dispatch(setLanguage(language) as any);
    setSelectedLanguage(language);
    setIsOpen(false);
  };



  return (
    <>
    <div className="styledDropdown">
      <div className="dropdownButton text-md" onClick={toggleDropdown}>
        <Icon icon={selectedLanguage === "FR" ? "twemoji:flag-for-france" : "twemoji:flag-for-united-kingdom"} style={{ marginRight: "0.5rem" }} />
        {selectedLanguage.toUpperCase()}
      </div>
      {isOpen && (
        <div className="dropdownMenu">
          <div onClick={() => handleLanguageChange("FR")} className="dropdown-item">
          <Icon icon="twemoji:flag-france" /> &nbsp;
            <span className="">FR</span>
          </div>
          
          <div onClick={() => handleLanguageChange("EN")} className="dropdown-item">
          <Icon icon="twemoji:flag-for-united-kingdom" /> &nbsp;
            <span className="">EN</span>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default LanguageSelector;
