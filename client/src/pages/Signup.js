import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
            <h2 className="text-4xl font-bold mb-8">Sign Up</h2>


            <div className="flex-row space-between my-2">
              <label htmlFor="firstName">First Name:</label>
              <input
                placeholder="First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange} />
            </div>

            <div className="flex-row space-between my-2">
              <label htmlFor="lastName">Last Name:</label>
              <input
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>


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
            <Link to="/login" className="text-center text-sm"> ← Already a WishCloud user? Click here to sign-in...</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
