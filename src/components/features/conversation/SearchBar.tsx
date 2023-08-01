import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "../../../../styled-system/css";

const SearchBar = () => {
  return (
    <div
      className={css({
        position: "relative",
        display: "flex",
        padding: "8px 16px",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "#CFD3D4",
        gap: "5px",
        width: "100%",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
        })}
      >
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className={css({
          outline: "none",
          w: "100%",
        })}
      />
    </div>
  );
};

export default SearchBar;
