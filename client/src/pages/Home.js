import React from "react";
import Welcome from "../components/Welcome";
import WelcomeCards from "../components/WelcomeCards";

const Home = () => {
  return (
    <div className="container">
      <Welcome />
      <WelcomeCards />
    </div>
  );
};

export default Home;
