import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { MendableSearchBar } from '@mendable/search';
import * as dotenv from 'dotenv';
import Question from "./Question";
dotenv.config();


const AskAndEarn = (props) => {
  const navigate = useNavigate();
 
  return (
    <>

      <h1>Ask and Earn $GIT</h1>
      <p>Rules:</p>
      <br />
      <MendableSearchBar 
        style={{darkMode:true, accentColor: "#8559F4"}}
        placeholder="Ask me about Mantle Network"
        dialogPlaceholder="HHHHHHHH"
        anon_key={process.env.ANON_KEY}
        />
    <h3>Most asked from users</h3>
    <h2>Share on Twitter</h2>
    <img src={"https://i0.wp.com/pureinfotech.com/wp-content/uploads/2013/03/twitter-app-windows8.png?w=780&quality=78&strip=all&ssl=1"} width="50px" height="50px"></img>
    <button>
    <a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=Hello%20world"
  data-size="large">
    Tweet</a>
    </button>

    <br/>
    <Question/>
      <button onClick={() => navigate('/')}>Go Back to Home Page</button>
      <button onClick={() => navigate('/connectwallet')}>Back</button>
  

    </>
  );
};

export default AskAndEarn;

