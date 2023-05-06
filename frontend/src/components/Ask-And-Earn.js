import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { MendableSearchBar } from '@mendable/search';
import * as dotenv from 'dotenv';
import Question from "./Question";
dotenv.config();


const AskAndEarn = (props) => {
  const navigate = useNavigate();
  const [address,setAddress] = useState("0x");
  const [balance,setBalance] = useState();

  async function requestAccount(){
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

  async function showAccount(){
    // await requestAccount();
    if(window.ethereum){
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(res=>{setAddress(res)})
    }else{
        alert("install metamask extension!")
    }
    // if(window.ethereum){
    //     window.ethereum.request({method:'eth_getBalance',params:[address,'latest']})
    //     .then(bal=>{setBalance(bal)})
    // }
  }
 
  return (
    <>

      <h1>Ask and Earn $GIT</h1>
      <p>Rules:</p>
      <br />
      {/* <button onClick={showAccount}>Connect to Metamask</button> */}
      <MendableSearchBar 
        style={{darkMode:true, accentColor: "#8559F4"}}
        placeholder="Ask me about Mantle Network"
        dialogPlaceholder="HHHHHHHH"
        anon_key={process.env.ANON_KEY}
        />
    <h3>Most asked from users</h3>
    <Question/>
      <button onClick={() => navigate('/')}>Go Back to Home Page</button>
      <button onClick={() => navigate('/connectwallet')}>Back</button>
  

    </>
  );
};

export default AskAndEarn;

