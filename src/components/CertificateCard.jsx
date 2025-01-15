const CertificateCard = ({ title, institution, link }) => {
  return (
    <div className="certificate">
      <h3>{title}</h3>
      <p>{institution}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Certificado
      </a>
    </div>
  );
};

export default CertificateCard;
