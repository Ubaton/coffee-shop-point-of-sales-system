import { Button } from "@heroui/react";
import PropTypes from "prop-types";

const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex space-x-4 p-4">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded ${
            activeCategory === category
              ? "bg-amber-600 text-white rounded-2xl"
              : "bg-amber-100 rounded-2xl"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

CategoryTabs.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

export default CategoryTabs;
