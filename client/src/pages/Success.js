import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_WISHLIST } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addWishlist] = useMutation(ADD_WISHLIST);

  useEffect(() => {
    async function saveWishlist() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addWishlist({ variables: { products } });
        const productData = data.addWishlist.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveWishlist();
  }, [addWishlist]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
