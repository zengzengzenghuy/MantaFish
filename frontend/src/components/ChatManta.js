import React from "react";
import { useNavigate } from "react-router-dom";
import { MendableSearchBar } from '@mendable/search';
import * as dotenv from 'dotenv';

dotenv.config();


const ChatManta = (props) => {
  const navigate = useNavigate();
 
  return (
    <>

      <h1>Ask me Anything!</h1>
      <p>I am a fast learner that is powered by [AI](https://www.mendable.ai/). Let's learn about Mantle Network with Me!</p>
      <br />
      <MendableSearchBar 
        style={{darkMode:true, accentColor: "#8559F4"}}
        placeholder="Ask me about Mantle Network"
        dialogPlaceholder=""
        anon_key={process.env.ANON_KEY}
        />
      <br/>
    <h3>Share your learning on Twitter!</h3>
    <img src={"https://i0.wp.com/pureinfotech.com/wp-content/uploads/2013/03/twitter-app-windows8.png?w=780&quality=78&strip=all&ssl=1"} width="60px" height="55px"></img>
    <button>
    <a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=Hello%20world"
  data-size="large">
    Tweet</a>
    </button>
    <br/>
    <button onClick={() => navigate('/')}>Go Back to Home Page</button>
    </>
  );
};

export default ChatManta;

