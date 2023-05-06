import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import * as dotenv from 'dotenv';
dotenv.config();


const AddMantleNetwork = (props) => {
  const navigate = useNavigate();
  const [address,setAddress] = useState("0x");
//   const [balance,setBalance] = useState();


  async function connectAccount(){
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

  //https://www.covalenthq.com/docs/networks/mantle-testnet/
  async function addMantleNetwork() {
    if(typeof window.ethereum != undefined){
        try {
            const result = await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [{
                chainId: "0x1389",
                rpcUrls: ["https://rpc.testnet.mantle.xyz"],
                chainName: "Mantle Testnet",
                nativeCurrency: {
                  name: "BIT",
                  symbol: "BIT",
                  decimals: 18
                },
                blockExplorerUrls: ["https://explorer.testnet.mantle.xyz/"]
              }]
            });
          } catch (error){
            console.log(error)
          }
      
    }else{
        alert("Please connect to Metamask!")
    }
    
  }
  return (
    <>
    <button onClick={connectAccount}>Connect to Metamask</button>
    <p>Connected to {address}</p>  
    <br/>
    <button onClick={addMantleNetwork}>Add Mantle Network</button>
    <br/>
    <button onClick={() => navigate('/')}>Go Back to Home Page</button>
    <br/>
    <button onClick={() => navigate('/askandearn')}>Go to Play</button>
    </>
  );
};


export default AddMantleNetwork;

