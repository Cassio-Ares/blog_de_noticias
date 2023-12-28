"use client";

import "./style.css";

const Noticia = (props) => {
  return (
    <section>
      {/* <div className= 'imagem' style{{backgroundImage: 'url(${props.noticia.img}}' */}
      <div>{props.noticia.titulo}</div>
      {props.noticia.img}
      <img src={props.noticia.img} alt="noticia" />

      <div dangerouslySetInnerHTML={{ __html: props.noticia.texto }} />

      <div className="publicado-em">
        {new Date(Noticia.createdAt).toLocaleDateString("pt-BR")}
      </div>
    </section>
  );
};

export default Noticia;
