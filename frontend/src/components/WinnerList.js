import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
// import { ethers } from "ethers";

// import ABI from "../../../contract/artifacts/contracts/AskAndEarn.sol/AskAndEarn.json";

// import AAEContract from "../../../contract/contractList.json";
import Winners from './Winner';
const WinnerList = () =>{
    
    <h2>Action #3: Check out the past winners! Congratulations!</h2>
    const navigate = useNavigate();
  
    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // const AAEaddress = AAEContract.AskAndEarn;
    // const AAEContract = new ethers.Contract(AAEaddress,ABI.abi,provider);
    // const getWinnerList = AAEContract.winnerlist();

    return(
        <>
        <Header/>
        <p>Click to check on the Explorer</p>
        <br/>
        <Winners/>
        <br/>
        <button onClick={() => navigate('/')}>Go Back to Home Page</button>
    <br/>
    <h2>What to learn more about Mantle Network? Check out their <a href="https://www.mantle.xyz/">official documentation</a>!</h2>
        </>
    )
}

export default WinnerList;