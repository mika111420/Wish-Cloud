import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      window.location.replace("/main");
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[600px] shadow-gray-600 shadow-lg sm:max-w-[900px]">
        <div className="w-full h-[600px] hidden md:block">
          <img className="w-full h-[600px] hidden md:block" src="./assets/cloudsignup.jpg" alt="cloud signup" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form onSubmit={handleFormSubmit}>
            <h2 className="text-4xl font-bold mb-8">Login</h2>
            <div>
              <label htmlFor="email">Email address:</label>
              <input className="border p-2 mr-2"
                placeholder="wish@cloud.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange} />
            </div>

            <div >
              <label htmlFor="pwd">Password:</label>
              <input className="border p-2"
                placeholder="********"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange} />
            </div>
              <button className="w-full py-2 my-4 bg-blue-400 hover:bg-blue-500" type="submit">Login</button>
              <Link to="/signup" className="text-center text-sm"> ← Not yet a WishCloud user? Click here to register...</Link>
          </form>
        </div>
      </div>
    </div>

    //     {error ? (
    //       <div>
    //         <p className="error-text">The provided credentials are incorrect</p>
    //       </div>
    //     ) : null}
  
  );
}

export default Login;
