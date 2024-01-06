"use client";
import Noticia from "@/components/Noticia/Noticia";
import { useEffect, useState } from "react";
import axios from "axios";
import LateralEsquerda from "@/components/lateralEsquerda/LateralEsquerda";
import LateralDireita from "@/components/lateralDireita/LateralDireita";
import "./style.css";

const HomePage = () => {
  const [noticias, setNoticias] = useState([]);

  const getNoticias = async function () {
    try {
      const result = await axios.get("http://localhost:8080/noticias");
      setNoticias(result.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const getNoticiaMaisPopular = () => {
    if (noticias) {
      return noticias.find((noticia) => noticia.isPopular);
    }
  };

  const getUltimasNoticias = () => {
    if (noticias) {
      return noticias.filter((noticia) => noticia.isUltimas);
    }
  };

  useEffect(() => {
    getNoticias();
  }, []);

  return (
    <main className="home">
      <div>{ getNoticiaMaisPopular() && <LateralEsquerda noticia={getNoticiaMaisPopular()} />}</div>
      <section>
        {noticias.map((noticia) => (
          <Noticia key={noticia.id} noticia={noticia} />
        ))}
      </section>
      <div>{ getUltimasNoticias() && <LateralDireita noticias= {getUltimasNoticias()} />}</div>
    </main>
  );
};

export default HomePage;
