import { Input } from "@heroui/react";
import PropTypes from "prop-types";

const SearchBar = ({ serchTerm, setSearchTerm }) => {
  return (
    <div className="p-4">
      <Input
        type="text"
        placeholder="Search category or menu"
        value={serchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full"
      />
    </div>
  );
};

SearchBar.propTypes = {
  serchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
};

export default SearchBar;
