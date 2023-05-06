import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { MendableSearchBar } from '@mendable/search';
import * as dotenv from 'dotenv';
import Question from "./Question";
import ChatManta from "./ChatManta";
dotenv.config();


const AskAndEarn = (props) => {
  const navigate = useNavigate();
 
  return (
    <>
    <h2>Action #2: Ask as many questions about Mantle Network as you like. You'll be eligible for lucky draw for 100 $Bit per quarter. </h2>
      <ChatManta/>

    <br/>
    <h3>Most Popular from Users</h3>
    <Question/>
      <button onClick={() => navigate('/')}>Go Back to Home Page</button>
      <button onClick={() => navigate('/connectwallet')}>Back</button>
      <button onClick={() => navigate('/winners')}>Check past winners</button>

    </>
  );
};

export default AskAndEarn;

