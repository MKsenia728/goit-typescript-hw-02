import css from "./ImageCard.module.css";
import { CardProps } from "./ImageCard.types";


const ImageCard: React.FC<CardProps> = ({ card }) => {
  return (
    <div className={css.card}>
      <div className={css.imageDiv}>
        <img src={card.urlSmall} alt={card.description || "a photo"} />
      </div>
      <div className={css.info}>
        <p className={css.p}>
          <span className={css.title}>Likes: </span>
          <span>{card.likes}</span>
        </p>
        <p className={css.p}>
          <span className={css.title}>Autor: </span>
          <span>{card.name}</span>
        </p>
      </div>
    </div>
  );
};
export default ImageCard;
