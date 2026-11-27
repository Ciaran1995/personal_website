import Certificate from "../components/Certificate"


const CertificatesPage = ({ certificate }) => {
  const example = "can do something here";
  return (
    <div>
      <Certificate certificate={certificate}/>
    </div>
  );
}

export default CertificatesPage;


