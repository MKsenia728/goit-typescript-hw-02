import { IoSearchSharp } from "react-icons/io5";
import css from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit, topic }) => {
  const [query, setQuery] = useState(topic);
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchForm = e.target;
    const search = searchForm.elements.search.value.trim();
    onSubmit(search);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setQuery("")}
        />
        <button className={css.button} type="submit">
          <IoSearchSharp />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
