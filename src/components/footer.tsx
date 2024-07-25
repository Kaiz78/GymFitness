import { Link } from 'react-router-dom'
import {translate} from "../i18n";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function Footer() {

  const {language} = useSelector((state: RootState) => state.lang);  
  let content = translate('page', language) as any

  return (
    <footer className="footer footer-black footer-white bg-dark text-white">
    <div className="container">
      <div className="row">
        <nav className="footer-nav text-white">
          <ul>
            <li>
              <Link to="/about" target="_blank" className="text-white">
                {content.footer.liste1}
              </Link>
            </li>
            <li>
              <Link to="donate" target="_blank" className="text-white">
                {content.footer.liste2}
              </Link>
            </li>
            <li>
              <Link to="resource" target="_blank" className="text-white">
                {content.footer.liste3}
              </Link>
            </li>
            <li>
              <Link to="resource" target="_blank" className="text-white">
                {content.footer.liste4}
              </Link>
            </li>
            <li>
              <Link to="contact" target="_blank" className="text-white">
               {content.footer.liste5}
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
          {content.footer.copyright.msg_1} {content.footer.copyright.msg_2}  {content.footer.copyright.msg_3}
          </span>
        </div>


      </div>

    </div>
  </footer>
  )
}
