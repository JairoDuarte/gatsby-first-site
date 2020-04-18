import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import "./styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import wa from "../assets/photo7.jpg";
import selo from "../assets/selo.png";
import img1 from "../assets/quarto1.jpg";
import img2 from "../assets/quarto2.jpg";
import img3 from "../assets/sala.jpg";

const Hero = () => (
  <div className="flex flex-col items-center sm:flex-row sm:justify-between">
    <div className="p-8">
      <h2 className="font-bold text-2xl">Móveis Lindos</h2>
      <p className="text-xl">
        Comerciais e residenciais para todos os ambientes
      </p>
      <p className="text-gray-700"> Atendemos Angola e a Africa</p>
    </div>
    <img src={wa} alt="moveis lindos" />
  </div>
);

export default () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const selos = [0, 1, 2, 3];
  const projects = [
    { img: img1, description: "Quarto individual", project: "Quartos" },
    { img: img3, description: "Sala de estar", project: "Salas" },
    { img: img2, description: "Quarto casal", project: "Quartos" },
  ];

  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      <Header />
      <Hero />
      <div className="flex flex-col items-center sm:flex-row justify-around">
        {selos.map(() => (
          <img alt="selo" width="150px" src={selo} className="my-4" />
        ))}
      </div>
      <div>
        <h2 className="px-8 py-2 text-2xl font-bold">
          Projetos de móveis planejados
        </h2>
        <div className="flex flex-wrap sm:justify-around">
          {projects.map((item) => (
            <div className="max-w-sm">
              <div className="m-2 rounded shadow-lg">
                <img src={item.img} alt="projeto 1" />
                <div className="px-6 py-4">
                  <p className="font-bold text-xl mb-2">{item.project}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
