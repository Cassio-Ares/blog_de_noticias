'use client'
import { useState, useEffect } from "react";
import axios from 'axios';
import GridNoticia from '@/components/gridNoticia/GridNoticia'


const NoticiaPage = ({params}) => {
  const [noticias, setNoticias] = useState([]);

  const getNoticia = async () =>{
   try {
    const result = await axios.get(`http://localhost:8080/noticias?categoria=${params.categoria}`);
    setNoticias(result.data);
   } catch (error) {
    alert(error.response.data.message);
   }
  };

  useEffect(() => {
    getNoticia()
  }, [])
  


  return (
   <div>
     <h1>{params.categoria.toUpperCase()}</h1>
     <GridNoticia/>
   </div>
  )
}

export default NoticiaPage