"use client";
import Noticia from "@/components/Noticia/Noticia";
import { useEffect, useState } from "react";
import axios from "axios";
import LateralEsquerda from "@/components/lateralEsquerda/LateralEsquerda";
import LateralDireita from "@/components/lateralDireita/LateralDireita";
import './style.css'


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

  const getNoticiaMaisPopular = () =>{
    if(noticias){
      return noticias.find(noticia => noticia.isPopular)
    }
  }

  const getUltimasNoticias = () =>{
    if(noticias){
      return noticias.filter(noticia => noticia.isUltima)
    }
  }

  useEffect(() => {
    getNoticias();
  }, []);

  return (
    <main className="grid-home">
      {getNoticiaMaisPopular() && <LateralEsquerda noticias={getNoticiaMaisPopular()} /> }
      
      <section>
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.id} />
        ))}
      </section>
      {getUltimasNoticias() && <LateralDireita noticias={getNoticiaMaisPopular()} />}
    </main>
  );
};

export default HomePage;
