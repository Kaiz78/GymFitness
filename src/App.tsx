import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Involve from './pages/involve';
import Resource from './pages/resource';
import Donate from './pages/donate';
import Navbar from './components/navbar';
// import Footer from './components/footer';
import FormInput from './components/formInput';


import './styles/index.scss';




function App() {
  const ROUTE = import.meta.env.VITE_ROUTE;

  



  return (
    <>
    <BrowserRouter>
     <HelmetProvider>    
      <Navbar/>
      <Routes>
        <Route path="*" element={<Navigate to={`${ROUTE}`} />} />
        <Route path={`${ROUTE}`} element={<Home />} />
        <Route path={`${ROUTE}/about`} element={<About  />} />
        <Route path={`${ROUTE}/donate`}  element={<Donate />} />
        <Route path={`${ROUTE}/involve`}  element={<Involve />} />
        <Route path={`${ROUTE}/resource`}  element={<Resource />} />
        <Route path={`${ROUTE}/contact`}  element={<Contact />} />
        <Route path={`${ROUTE}/test`}  element={<FormInput />} />
      </Routes>
      {/* <Footer /> */}
      </HelmetProvider>
    </BrowserRouter>


    </>
  )
}

export default App
