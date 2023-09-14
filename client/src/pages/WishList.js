import React from "react";
import { Link } from "react-router-dom";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { ADD_ORDER } from "../utils/mutations";
import { useSearchParams } from "react-router-dom";

function WishList() {
  //const [searchparams] = useSearchParams();
  //console.log("hi there");
  //console.log(searchparams.get("state_cart_arr"));
  const { data } = useQuery(QUERY_USER);
  console.log (data);
  let user;

  const [setData] = useMutation(ADD_ORDER);

  if (data) {
    user = data.user.orders;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/main">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              WishList for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default WishList;
