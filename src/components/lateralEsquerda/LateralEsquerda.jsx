import { trucateWithEllipses } from "@/libs/trucateWithEllipses";
import CardNoticia from "../cardNoticia/CardNoticia"
import './style.css';

const LateralEsquerda = ({noticia}) => {



  noticia.texto = trucateWithEllipses(noticia.texto, 100)

  return (
    <div className="mais-popular">
     <div className="titulo">Mais popular</div>
     <CardNoticia noticia={ noticia } temHover={true}/>
    </div>
  )
}

export default LateralEsquerda
