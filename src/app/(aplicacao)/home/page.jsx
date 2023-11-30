'use client'
import Noticia from "@/components/Noticia/Noticia"
import { useEffect, useState } from "react"
import axios from "axios"

const HomePage = () => {

  const [noticia, setNoticias] = useState([]);

  const getNoticias = async function () {
     try {
      const result = await axios.get('http://localhost:8080/noticias')
      setNoticias(result.data)
     } catch (error) {
      alert(error.response.data.message)
     }
  }

  useEffect(() => {
    getNoticias()
  }, [])

  return (
    <main>
      {noticia.map(noticia => (
        <Noticia noticia={noticia} key={noticia.id} />
      ))}
    </main>
  )
}

export default HomePage