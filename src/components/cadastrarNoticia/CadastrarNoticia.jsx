"use client";

import { useState } from "react";

const CadastrarNoticia = () => {
  const [titulo, setTitulo] = useState("");
  const [img, setImg] = useState("");
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cadastrar ok", titulo, img, texto);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "titulo") {
      setTitulo(value);
    }
    if (name === "img") {
      setImg(value);
    }
    if (name === "texto") {
      setTexto(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name="titulo" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="img">Imagem</label>
        <input type="text" name="img" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="texto">Texto</label>
        <textarea name="texto" onChange={handleChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CadastrarNoticia;
