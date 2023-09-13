import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>"Dream Big, Create a Wishlist, Make Memories..."</h1>
      <p>
        Embrace the magic of special occasions by creating a wishlist. It's the
        first step towards turning your dreams into reality.
      </p>
      <Link to="/Signup">
        <button>🎁 Create WishCloud 🎁</button>
      </Link>
      <div>
        <h2>Fast and cost-free </h2>
        <p>
          WishCloud allows you to swiftly create your wishlist at no cost and
          easier than ever!
        </p>
      </div>
      <div>
        <h2> For every event </h2>
        <p>Design your wishlist to suit any occasion of your choosing.</p>
      </div>
      <div>
        <h2> With one click</h2>
        <p>
          With the WishCloud button you can add gift items to your wish list
          with just one click.
        </p>
      </div>
      <div>
        <h2> Share easily</h2>
        <p>
          Share your wish list with family and friends via e-mail, messenger or
          social media.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
