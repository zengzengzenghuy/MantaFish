import React from "react";
import { useNavigate } from "react-router-dom";
import { MendableSearchBar } from '@mendable/search';
import * as dotenv from 'dotenv';
import Header from "./Header";

dotenv.config();


const ChatManta = (props) => {
  const navigate = useNavigate();
 
  return (
    <>
      <Header/>
      <h1>Ask me Anything!</h1>
      <p>I am a fast learner that is powered by <a href="https://www.mendable.ai/">AI</a>. Let's learn about Mantle Network with Me!</p>
      <br />
      <div style={{'width':"50%",'background-color':'yellow','border-radius': '25px'}}>
      <MendableSearchBar 
        style={{darkMode:true, accentColor: "#8559F4"}}
        placeholder="Ask me about Mantle Network"
        dialogPlaceholder=""
        anon_key={"9eab6b13-29e4-4b4e-bb28-4752c5b7b96e"}
        />
      </div>
      <br/>
    <h3>Share your learning on Twitter!</h3>
    <img src={"https://i0.wp.com/pureinfotech.com/wp-content/uploads/2013/03/twitter-app-windows8.png?w=780&quality=78&strip=all&ssl=1"} width="60px" height="55px"></img>
    <button>
    <a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=Hello%20world"
  data-size="large">
    Tweet</a>
    </button>
    </>
  );
};

export default ChatManta;

