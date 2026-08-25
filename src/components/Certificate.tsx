

const Certificate = ({certificate}) => {
    return (
    <div className = "certificate-container">
        <a href = {certificate.url} target="_blank">
        <img className = "certificate" src = {`src/assets/images/certificates/${certificate.image}`}/>
        </a>
    </div>
    )
};

// Return the component
export default Certificate;