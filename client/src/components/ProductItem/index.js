import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";


function ProductItem({item}) {
  const [state, dispatch] = useStoreContext();
console.log(item)
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`${image}`}
          className="w-full h-40 object-cover rounded-t-lg"/>
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p className="text-gray-700 text-sm mt-1">Price: ${price}</p>
        <p className="text-gray-700 text-sm">Quantity: {quantity}</p>
      </Link>
      
      <button onClick={addToCart} className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2 font-semibold hover:bg-blue-600">Add to cart</button>
    </div>
  );
}

export default ProductItem;
