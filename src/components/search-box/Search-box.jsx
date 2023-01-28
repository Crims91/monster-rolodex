import "./Search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, onChangeHandlder } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandlder}
    />
  );
};

export default SearchBox;
