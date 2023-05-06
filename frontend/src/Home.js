import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <p>Go to the contact page by using one of the following:</p>
      <hr />


      <p>
        <button onClick={() => navigate("/contact")}>Go to Contact</button>
      </p>
      <p>
        <button onClick={() => navigate("/connectWallet")}>Connect Wallet</button>
      </p>

      {/* <p>
        <input
          type="checkbox"
          onChange={() => navigate("/contact")}
        ></input>
        <span>Check this checkbox to go to the contact page</span>
      </p>

  
      <p>
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value === "contact") {
              navigate("/contact");
            }
          }}
          placeholder="Enter 'contact' to navigate"
        ></input>
      </p> */}
    </>
  );
};

export default Home;