import css from "./SearchBox.module.css";

function SearchBox({ searchKey, setSearchKey }) {
  function handleChange(event) {
    setSearchKey(event.target.value);
  }

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        onChange={handleChange}
        value={searchKey}
        type="text"
        name="search"
      />
    </div>
  );
}

export default SearchBox;
