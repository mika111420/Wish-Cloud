import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";


function ProductList({ display }) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

return (
<div className="my-2">
  <h2 className="text-2xl font-semibold mb-4">Our Products:</h2>
  {state.products.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {display &&
        filterProducts().map((product) => (
          // <div key={product._id} className="bg-white rounded-lg p-4 shadow-md">
          //   <img
          //     src={product.image}
          //     alt={product.name}
          //     className="w-full h-40 object-cover rounded-t-lg"
          //   />
          //   <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          //   <p className="text-gray-700 text-sm mt-1">Price: ${product.price}</p>
          //   <p className="text-gray-700 text-sm">Quantity: {product.quantity}</p>
          //   <button
          //         className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2 font-semibold hover:bg-blue-600"
          //         onClick={() => addToCart(product)} 
          //       >
          //         Add to Cart
          //       </button>
          // </div>
          <ProductItem item={product}/>
        ))}
    </div>
  ) : (
    <h3 className="text-lg font-semibold">You haven't added any products yet!</h3>
  )}
  {loading && <img src={spinner} alt="loading" className="mt-4" />}
</div>
);
  }

export default ProductList;
