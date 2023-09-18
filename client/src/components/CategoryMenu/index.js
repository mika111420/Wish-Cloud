import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function CategoryMenu({ setdisplay }) {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
    setdisplay(true);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mt-4 mb-4">Select your special occasion:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
          className="bg-blue-500 text-white rounded-full px-4 py-2 m-2 font-semibold hover:bg-blue-600 sm:text-sm sm:px-3 sm:py-1 sm:m-1 md:text-base md:px-4 md:py-2 md:m-2 lg:text-lg lg:px-4 lg:py-2 lg:m-2"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
