import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode, faAws, faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

const links = [
  {id: 1, name: 'Node', icon: faNode, size: '3x', link: 'https://nodejs.org/en/'},
  {id: 2, name: 'React', icon: faReact, size: '3x', link: 'https://reactjs.org/'},
  {id: 3, name: 'Aws', icon: faAws, size: '3x', link: 'https://aws.amazon.com/'},
  {id: 4, name: 'FontAwesome', icon: faFontAwesome, size: '3x', link: 'https://fontawesome.com/'},
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content-left">

          <div className="footer-section">
            <h2 className="footer-name" style={{ color: '#00FECA' }}>SECTION</h2>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/">Projects</Link></li>
              <li className="footer-link"><Link to="/docs">Resume</Link></li>
              <li className="footer-link"><Link to="/blogs">Blogs</Link></li>
              <li className="footer-link"><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className="footer-name" style={{ color: '#7B61F8' }}>SOCIAL</h2>
            <ul className="footer-links">
              <li className="footer-link"><a href="https://github.com/ISTEVIEYZ" rel="noopener noreferrer" target="_blank">Github</a></li>
              <li className="footer-link"><a href="https://www.linkedin.com/in/stephen-eisen-13a856a6/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
            </ul>
          </div>

        </div>
        <div className="footer-content-right">
          <div className="footer-section">
            <p>Developed with:</p>
            { links.map(link => {
          return (
            <li key={link.id}>
              <a style={{color: "#20232A"}} href={link.link} target="__blank">
                <FontAwesomeIcon  className="tech-link" icon={link.icon} size={link.size}/>
              </a>
            </li>
          );
        })}
          </div>
        </div>

      </div>

      <p>Developed by:</p>
      <a className="footer-logo" href="/">
        <div className="logo-first">STEPHEN</div>
        <div className="logo-last">EISEN</div>
      </a>

    </footer>
  );
}
export default Footer;