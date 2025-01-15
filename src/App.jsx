import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CertificateCard from "./components/CertificateCard";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Consumimos la API del backend para obtener los certificados
    const fetchCertificates = async () => {
      try {
        const response = await fetch("http://localhost:4000/certificates");
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error al obtener los certificados:", error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <div className="app">
      <Header />
      <section className="certificates">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            institution={cert.institution}
            link={cert.link}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default App;
