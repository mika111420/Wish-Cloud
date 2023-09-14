import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function Wishlist() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/main">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Wishlist for {user.firstName} {user.lastName}
            </h2>
            {user.wishlist.map((wishlist) => (
              <div key={wishlist._id} className="my-2">
                <h3>
                  {new Date(
                    parseInt(wishlist.purchaseDate)
                  ).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {wishlist.products.map(
                    ({ _id, image, name, price }, index) => (
                      <div key={index} className="card px-1 py-1">
                        <Link to={`/products/${_id}`}>
                          <img alt={name} src={`/images/${image}`} />
                          <p>{name}</p>
                        </Link>
                        <div>
                          <span>${price}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Wishlist;
