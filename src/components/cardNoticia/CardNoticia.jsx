"use client";
import { useState } from "react";
import "./style.css";

const CardNoticia = ({noticia, temHover=false}) => {
  const [isHover, setIsHover] = useState(false);
 
  return (
    <div className="card-noticia">
      <div
        style={{ position: "relative" }}
        onMouseEnter={()=> setIsHover(temHover ? true : false)}
        onMouseLeave={()=> setIsHover(false)}
      >
        <div className="popular" style={{opacity: isHover ? '1' : '0'}}> Clique aqui </div>
        <div
          className="image"
          style={{ backgroundImage: `url(${noticia.img})` }}
        />
      </div>

      <h2>{noticia.titulo}</h2>
      <p dangerouslySetInnerHTML={{__html:noticia.texto}}/>
      <hr />
      <div className="publicado-em">
        {new Date(noticia.createdAt).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};

export default CardNoticia;
