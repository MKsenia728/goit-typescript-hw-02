import PacmanLoader from "react-spinners/PacmanLoader";
import css from "./Loader.module.css"
import { LoaderProps } from "./Loader.types";

const Loader: React.FC<LoaderProps>  = ({ loading }) => {
  return(
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
