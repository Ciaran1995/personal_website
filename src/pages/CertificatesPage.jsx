import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Certificate from "../components/Certificate.jsx"



const CertificatesPage = ({ certificate }) => {
  const example = "can do something here";
  return (
    <div>
      <Certificate certificate={certificate}/>
    </div>
  );
}

export default CertificatesPage;


