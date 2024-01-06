'use client'
import './style.css'


import CardNoticia from "../cardNoticia/CardNoticia"


const GridNoticia = ({noticias}) => {
 
  return (
    <div className='grid-noticias'>
       {noticias.map(noticia =>(
        <CardNoticia key={noticia._id} noticia={noticia}/>
       ))}
    </div>
  )
}

export default GridNoticia


