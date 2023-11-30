'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import {useState} from "react";

const CadastroForm = () => {
  const [name,SetName]= useState("");
  const [email,SetEmail]= useState("");
  const [password,SetPassword]= useState("");

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        name, 
        email, 
        senha
      }

      const result = await axios.post('http://localhost:8080/usuarios', form)
      alert("Usuario foi cadastrado com sucesso");
      router.push('/adm/noticia/criar')
      
    } catch (error) {
      
    }
    console.log("Cadastro realizado com sucesso!", name, email, password);
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target

    switch(name){
      case "name":
        SetName(value);
        break;
      case "email":
        SetEmail(value);
        break;
      case "password":
        SetPassword(value);
        break;
     }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default CadastroForm;
