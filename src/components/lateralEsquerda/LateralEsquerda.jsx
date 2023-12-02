import { trucateWithEllipses } from "@/libs/trucateWithEllipses";
import CardNoticia from "../cardNoticia/CardNoticia"
import './style.css';

const LateralEsquerda = () => {

  noticia.texto = trucateWithEllipses(noticia.texto, 100)

  return (
    <div className="mais-popular">
     <div className="titulo"></div>
     <CardNoticia noticia={ noticia }/>
    </div>
  )
}

export default LateralEsquerda
