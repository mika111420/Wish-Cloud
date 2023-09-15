import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
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
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-300'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="https://www.linkedin.com/in/mikayla-rangel-8b013b291/">Linkedin<FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="https://github.com/mika111420">GitHub<FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400'>
                        <a className='flex justify-between items-center w-full text-white' href="mailto:mikaylar1202@gmail.com">Email<HiOutlineMail size={30} /></a>
                    </li>
                </ul>
            </div>
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

