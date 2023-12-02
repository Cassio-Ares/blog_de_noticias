"use client";

import './style.css';

const Noticia = (props) => {
  return (
    <section>
      {/* <div className= 'imagem' style{{backgroundImage: 'url(${props.noticia.img}}' */}
      {props.noticia.img}
      <img src={props.noticia.img} alt="noticia" />
      <div>{props.noticia.title}</div>

      <div dangerouslySetInnerHTML={{ __html: props.noticia.texto }} />

      <div className="publicado-em">
        {new Date(noticia.createdAt).toLocaleDateString("pt-BR")}
      </div>
    </section>
  );
};

export default Noticia;
