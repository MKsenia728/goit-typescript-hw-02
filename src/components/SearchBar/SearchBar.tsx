import { IoSearchSharp } from "react-icons/io5";
import css from "./SearchBar.module.css";
import { useState, FormEvent } from "react";
import { SearchBarProps } from "./SearcBarProps";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, topic }) => {
  const [query, setQuery] = useState<string>(topic);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchForm = e.target  as HTMLFormElement;
    const formElements = searchForm.elements as typeof searchForm.elements & {
      search: HTMLInputElement;
    };
    const search = formElements.search.value.trim();
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
