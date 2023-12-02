'use client'
import './style.css'


import CardNoticia from "../cardNoticia/CardNoticia"

const GridNoticia = ({noticias}) => {
  return (
    <div>
       {noticias.map(noticia=>{
        <CardNoticia key={noticia.id} noticia={noticia}/>
       })}
    </div>
  )
}

export default GridNoticia