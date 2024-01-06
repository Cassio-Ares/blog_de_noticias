"use client";

import "./style.css";

const Noticia = (props) => {
  return (
    <section className="noticia">
      <div
        className="imagem"
        style={{ backgroundImage: `url(${props.noticia.img})` }}
      />
      <div className="titulo">{props.noticia.titulo}</div>
      <div className="publicado-em">
        {new Date(props.noticia.createdAt).toLocaleDateString("pt-BR")}
      </div>

      <div className="texto" dangerouslySetInnerHTML={{ __html: props.noticia.texto }} />
    </section>
  );
};

export default Noticia;
