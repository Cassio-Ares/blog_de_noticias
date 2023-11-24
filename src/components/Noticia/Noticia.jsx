'use client'

import React from 'react'

const Noticia = (props) => {
  return (
    <section>
        <div>{props.noticia.title}</div>
        {props.noticia.img}
        <img src= {props.noticia.img} alt= "noticia" />
        <div dangerouslySetInnerHTML={{__html: props.noticia.texto}} />

    </section>
  )
}

export default Noticia