import { trucateWithEllipses } from "@/libs/trucateWithEllipses";
import CardNoticia from "../cardNoticia/CardNoticia"
import './style.css';

const LateralDireita = ({ noticias }) => {
  const noticiasComEllipse = ()=>{
    return noticias.map((index, noticia)=>{
      noticia.texto = trucateWithEllipses(noticia.texto, 100 );
      return <CardNoticia key={index} noticia= {noticia }/>
    })
  }
  return (
    <div>
      <div>Última Noticia</div>
      <div style={{marginBottom: '20px'}}>
        {noticiasComEllipse.length && noticiasComEllipse()}
      </div>
    </div>
  )
}

export default LateralDireita
