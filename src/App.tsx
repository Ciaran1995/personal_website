import { useState, navigate } from 'react'
import { Link, NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CertificatesPage from "./pages/CertificatesPage"
import Header from "./components/Header"
import interests from "../interests"

const certificate = {
    image: "CertificateOfCompletion_JavaScript_Essential_Training.png",
    url: "https://www.linkedin.com/learning/certificates/2930027f19e72ec8dc698401599851bce7bbd0ca60419dfca2db24aad6df0417?trk=share_certificate"
};

const HomePage = () => {
  const example = "can do something here";
  return (
    <>
      <div className="homepage">
        <Header></Header>
        
        <div className="homepage-body">
          <div className="homepage-bio">
            
            <div className="homepage-bio-content">
              <div className="bio-introduction">
                <h1>Hi! I'm Ciarán</h1>
                <h2>I'm a senior data scientist with a Ph.D. in theoretical physics from the University of Nottingham.</h2>

              </div>
              <div className="homepage-quick-links">
                  <NavLink to="/cv-ciaran" end className="cv-link" >
                        View my CV
                  </NavLink>
                  <NavLink to="/certificates" end className="certificate-link" >
                        View my certificates
                  </NavLink>

              </div>
              <div className="social-links">
                  
              </div>
            </div>
            
            
          </div>
          <div>
          <div className="homepage-interests">
          <div>
              <h2>What I do</h2>
          </div>
          <div className="what-i-do">
            
            {interests.map(i => (
              <div id={i.title} className="interests-card">
                <p>{i.icon}</p>
                <p>{i.title}</p>
                <p>{i.info}</p>

              </div>
            ))}
                
          </div>
          </div>
        </div>
      </div>

      </div>
      </>
  );
}


function App() {
  const [count, setCount] = useState(0)

   return (
    <Router>
      <div className="global-page">
        <Routes>
          <Route path="/" element={<HomePage count={count} setCount = {setCount}/>} />
          <Route path="/certificates" element={<CertificatesPage certificate={certificate}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
