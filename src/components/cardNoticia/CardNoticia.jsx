"use client";
import "./style.css";

const CardNoticia = ({ noticia }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="card-noticia">
      <div
        style={{ position: "relative" }}
        onMouseEnter={true}
        onMouseLeave={false}
      >
        <div className="popular" style={{opacity: isHover ? '1' : '0'}}> Clique aqui </div>
        <div
          className="imagem"
          style={{ backgroundImage: `url(${noticia.img})` }}
        />
      </div>

      <h2>{noticia.titulo}</h2>
      <p dangerouslySetInnerHTML={{ __html }}>{noticia.texto}</p>
      <hr />
      <div className="publicado-em">
        {new Date(noticia.createdAt).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};

export default CardNoticia;
