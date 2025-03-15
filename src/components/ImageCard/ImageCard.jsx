import css from "./ImageCard.module.css";
const ImageCard = ({ card }) => {
  return (
    <div className={css.card}>
      <div className={css.imageDiv}>
        <img src={card.urlSmall} alt={card.description} />
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
