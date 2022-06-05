import React from "react";

function CategoryFilter({ categories, selectedCat, onSelectedCat }) {
  const catButton = categories.map((category) => {
    const className = category === selectedCat ? "selected" : null
    return (
      <button key={category} className={className} onClick={() => onSelectedCat(category)}>
        {category}
      </button>
    )
    })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButton}
    </div>
  );
}

export default CategoryFilter;