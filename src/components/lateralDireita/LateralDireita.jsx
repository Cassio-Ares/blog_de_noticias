import { trucateWithEllipses } from "@/libs/trucateWithEllipses";
import CardNoticia from "../cardNoticia/CardNoticia";
import "./style.css";

const LateralDireita = ({ noticias }) => {


  const ultimasNoticias = () => {
   return noticias.map((noticia, index) => {
      noticia.texto = trucateWithEllipses(noticia.texto, 100);
      return <CardNoticia key={index} noticia={noticia} />;
     
    });
  };

  return (
    <div className="ultimas-Noticias">
      <div className="titulo">Última Noticia</div>
      <div style={{ marginBottom: "20px" }}>
        {noticias.length && ultimasNoticias()}
      </div>
    </div>
  );
};

export default LateralDireita;
