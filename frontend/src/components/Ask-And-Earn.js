import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { MendableSearchBar } from '@mendable/search';
import * as dotenv from 'dotenv';
import Question from "./Question";
import ChatManta from "./ChatManta";
import Header from "./Header";
dotenv.config();


const AskAndEarn = (props) => {
  const navigate = useNavigate();
 
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <h3>Action #2: Ask as many questions about Mantle Network as you like. You'll be eligible for lucky draw for 100 $Bit per quarter. </h3>
      <ChatManta/>

    <br/>
    <div style={{border: '1px solid'}}>
    <h3>Most Popular from Users</h3>
    <Question/>
    </div>
    <br/>
    <div style={{  'display': 'flex','flex-direction':'row',
    'justify-content':'center',  'gap': '50px'}}>
    <button onClick={() => navigate('/')}>Go Back to Home Page</button>
      <button onClick={() => navigate('/connectwallet')}>Back</button>
      <button onClick={() => navigate('/winners')}>Check past winners</button>
    </div>


    </>
  );
};

export default AskAndEarn;

