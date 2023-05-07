import React from "react";
import { useNavigate } from "react-router-dom";
import ChatManta from "./components/ChatManta";
import Header from "./components/Header";
const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <Header/>
      <h1>Manta Fish</h1>
      <p>Welcome to Manta Fish</p>
      <p>I am a friendly fish that will guide you through the journey of learning Mantle Network</p>
      <hr />
    {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */}
    <div style={{'display': 'flex','flex-direction':'row','justify-content':'space-evenly','gap':'20px'}}>    
        <button onClick={() => navigate("/chatmanta")} style={{ width: "350px", height: "250px",  backgroundColor:"blue",fontSize:50,'border-radius': '25px',}}>Chat with Manta</button>
        <button onClick={() => navigate("/connectWallet")} style={{ width: "350px", height: "250px", backgroundColor: 'blue',fontSize:50,'border-radius': '25px',}}>Maaaanta BIT</button>
  </div>
  <br/>
  <b>If you want to ask me anything about Mantle Network, click 'Chat with Manta'</b>
  <br/>
  <b>If you want to have more interaction with me and stand a chance to win $BIT, click 'Maaaanta BIT' </b>

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