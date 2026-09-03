import { useState, navigate } from 'react'
import { Link, NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/root/git_repos/react-project/public/vite.svg'
import './App.css'
import CertificatesPage from "./pages/CertificatesPage"
import Header from "./components/Header"

const certificate = {
    image: "CertificateOfCompletion_JavaScript_Essential_Training.png",
    url: "https://www.linkedin.com/learning/certificates/2930027f19e72ec8dc698401599851bce7bbd0ca60419dfca2db24aad6df0417?trk=share_certificate"
};

const HomePage = ({count, setCount}) => {
  const example = "can do something here";
  return (
    <>
      <div className="homepage">
        <Header></Header>
        
        <div className="homepage-body">
        <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
          <h1>Vite + React</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>

        <div className="footer">
            <a>email</a>
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
