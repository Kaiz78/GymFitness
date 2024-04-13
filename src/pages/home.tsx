import React, { useState } from "react";
import {translate} from "../i18n";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PollutionMap from "../components/PollutionMap";
import FranceMapSVG from "../assets/franceLow.svg";



export default function home() {



    const {language} = useSelector((state: RootState) => state.lang);  
    let content = translate('page', language) as any


    // Vérification email 
    // let regexEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");


    // const [email, setEmail] = useState("");
    // const [isEmpty, setIsEmpty] = useState(false);
    // const [isInvalid, setIsInvalid] = useState(false);


    // const handleSubmit = (e: React.FormEvent) => {
    //   e.preventDefault();
    //   if (email == "") {
    //     setIsEmpty(true);
    //   }else{
    //     setIsEmpty(false);
    //   }

    //   if(regexEmail.test(email)) {
    //     setIsInvalid(false);
    //   }else{
    //     setIsInvalid(true);
    //   }
    // }



  return (
    <>
    <section className="hero-section text-center py-5">
      <div className="container">
        {/* Image ou vidéo attrayante */}
        <img
          src="https://placehold.co/1200x600"
          alt="Impact positif des dons alimentaires"
          className="img-fluid mb-4"
        />

        {/* Titre principal */}
        <h1 className="mb-3">Agissez maintenant contre la faim avec [Nom de l'Association]</h1>

        {/* Sous-titre explicatif */}
        <p className="lead">Ensemble, nous pouvons faire une différence en offrant de la nourriture à ceux dans le besoin.</p>
      </div>
    </section>



    <section className="introduction-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* Court paragraphe décrivant la mission */}
            <p className="lead text-center">
              L'Association [Nom de l'Association] s'engage à lutter contre la faim en collectant des dons alimentaires
              et en les distribuant aux plus démunis. Notre mission est de fournir un soutien essentiel aux communautés
              en difficulté et de faire une différence tangible dans la vie de ceux qui ont besoin d'aide.
            </p>
          </div>
        </div>
      </div>
    </section>




    <section className="features-section py-5">
      <div className="container">
        <div className="row">
          {/* Distribution Alimentaire */}
          <div className="col-md-4">
            <div className="feature-item text-center">
              <i className="fas fa-utensils fa-3x mb-3"></i>
              <h3>Distribution Alimentaire</h3>
              <p className="text-muted">
                Notre association collecte et distribue des denrées alimentaires aux personnes dans le besoin,
                assurant ainsi une aide alimentaire essentielle aux communautés locales.
              </p>
            </div>
          </div>
          {/* Programmes de Sensibilisation */}
          <div className="col-md-4">
            <div className="feature-item text-center">
              <i className="fas fa-bullhorn fa-3x mb-3"></i>
              <h3>Programmes de Sensibilisation</h3>
              <p className="text-muted">
                Nous menons des campagnes de sensibilisation pour lutter contre la faim et encourager les dons alimentaires,
                éduquant ainsi le public sur l'importance de notre cause.
              </p>
            </div>
          </div>
          {/* Impact Social */}
          <div className="col-md-4">
            <div className="feature-item text-center">
              <i className="fas fa-heart fa-3x mb-3"></i>
              <h3>Impact Social</h3>
              <p className="text-muted">
                Découvrez l'impact positif de nos actions à travers des statistiques et des témoignages,
                illustrant comment nous faisons une différence dans la vie des personnes que nous aidons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Témoignages</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-item text-center">
              <img src="https://placehold.co/150x150" alt="Témoignage 1" className="img-fluid rounded-circle mb-3" />
              <h3>John Doe</h3>
              <p className="text-muted">"Grâce aux dons alimentaires de cette association, ma famille a pu passer des moments difficiles."</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item text-center">
              <img src="https://placehold.co/150x150" alt="Témoignage 2" className="img-fluid rounded-circle mb-3" />
              <h3>Jane Smith</h3>
              <p className="text-muted">"Je suis fier de contribuer en tant que bénévole à cette noble cause."</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item text-center">
              <img src="https://placehold.co/150x150" alt="Témoignage 3" className="img-fluid rounded-circle mb-3" />
              <h3>David Johnson</h3>
              <p className="text-muted">"Les dons alimentaires sont essentiels pour soutenir les plus démunis, et cette association le fait si bien."</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="latest-news-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Dernières Actualités</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://placehold.co/350x200" className="card-img-top" alt="Actualité 1" />
              <div className="card-body">
                <h5 className="card-title">Titre de l'Actualité 1</h5>
                <p className="card-text">Résumé de l'article ou de l'événement.</p>
                <a href="#" className="btn btn-primary">Lire plus</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://placehold.co/350x200" className="card-img-top" alt="Actualité 2" />
              <div className="card-body">
                <h5 className="card-title">Titre de l'Actualité 2</h5>
                <p className="card-text">Résumé de l'article ou de l'événement.</p>
                <a href="#" className="btn btn-primary">Lire plus</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://placehold.co/350x200" className="card-img-top" alt="Actualité 3" />
              <div className="card-body">
                <h5 className="card-title">Titre de l'Actualité 3</h5>
                <p className="card-text">Résumé de l'article ou de l'événement.</p>
                <a href="#" className="btn btn-primary">Lire plus</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Carte  */}
    <section className="mb-3">
    <div className="container"
   style={
    {
      width: '40%',
      height: '500px',
    }
   }
   >
    </div>
    </section>

<img src={FranceMapSVG} alt="" />



    <footer className="footer footer-black footer-white bg-dark text-white">
      <div className="container">
        <div className="row">
          <nav className="footer-nav text-white">
            <ul>
              <li>
                <Link to="/about" target="_blank" className="text-white">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="donate" target="_blank" className="text-white">
                  Faire un Don
                </Link>
              </li>
              <li>
                <Link to="resource" target="_blank" className="text-white">
                  Implication
                </Link>
              </li>
              <li>
                <Link to="resource" target="_blank" className="text-white">
                  Ressources
                </Link>
              </li>
              <li>
                <Link to="contact" target="_blank" className="text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* <form className={`form-group ${isEmpty || isInvalid ? 'has-danger' : ''}`}  onSubmit={handleSubmit}>
            <input
              className="form-control"
              // defaultValue="Error
              id="inputDanger1"
              type="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value) }
            />
            {isEmpty && <div className="text-danger mx-2">Le champ ne peut être vide</div>}
            {!isEmpty && isInvalid && <div className="text-danger mx-2">
              L'adresse email n'est pas valide  
            </div>
            }

           
            <div className="d-flex justify-content-center m-0">
              <button type="submit" className="btn btn-primary">Confirmer</button>
            </div>
          </form> */}



          <div className="d-flex justify-content-center">
            <span className="copyright">
              © <script>document.write(new Date().getFullYear())</script> made with  Logo
            </span>
          </div>


        </div>

      </div>
    </footer>

    
    </>
  )
}







