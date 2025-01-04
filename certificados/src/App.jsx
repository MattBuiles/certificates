import React from "react";
import Header from "./components/Header";
import CertificateCard from "./components/CertificateCard";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  const certificates = [
    {
      title: "Python para Todos",
      institution: "Universidad de Michigan",
      link: "/Certificados/Programación/Python.pdf",
    },
    {
      title: "Machine Learning",
      institution: "Stanford University",
      link: "/Certificados/Data_Science/Machine_Learning.pdf",
    },
    {
      title: "AWS Cloud Practitioner",
      institution: "Amazon Web Services",
      link: "/Certificados/Cloud/AWS_CloudPractitioner.pdf",
    },
  ];

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
