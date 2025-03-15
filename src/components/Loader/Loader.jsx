import PacmanLoader from "react-spinners/PacmanLoader";
import css from "./Loader.module.css"

const Loader = ({ loading }) => {
  return (
    <div className={css.div}>
      <PacmanLoader
        color="grey"
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
