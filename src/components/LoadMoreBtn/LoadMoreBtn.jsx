import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoad, maxPages }) => {
  return (
    <button className={css.button} onClick={onLoad}>
      Load more... {maxPages} pages
    </button>
  );
};

export default LoadMoreBtn;
