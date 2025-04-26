import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoad, maxPages }) => {
  return (
    <button className={css.button} onClick={onLoad}>
      Load more... {maxPages} pages
    </button>
  );
};

export default LoadMoreBtn;
