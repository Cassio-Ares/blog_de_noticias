"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const CadastrarNoticia = () => {
  const [titulo, setTitulo] = useState("");
  const [img, setImg] = useState();
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formulario = {
        titulo,
        img,
        texto,
        categoria
      };

      const result = await axios.post( "http://localhost:8080/noticias", formulario );
      alert("Nova noticia cadastrada");
      return router.push("/home");
    } catch (error) {
      alert(error.response.data.message);
    }

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
    if (name === "categoria") {
      setCategoria(value);
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

      <div>
        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" onChange={handleChange}>
          <option>Categorias</option>
          <option value="produto">Produto</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="rh">RH</option>
          <option value="vendas">Vendas</option>
        </select>
      </div>
      <button type="submit">Criar noticia</button>
    </form>
  );
};

export default CadastrarNoticia;
