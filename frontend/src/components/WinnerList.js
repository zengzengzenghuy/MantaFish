import React from 'react';
import { useNavigate } from "react-router-dom";
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
        <Winners/>;
        <button onClick={() => navigate('/')}>Go Back to Home Page</button>
    <br/>
    <h2>What to learn more about Mantle Network? Check out their [official documentation](https://www.mantle.xyz/)!</h2>
        </>
    )
}

export default WinnerList;