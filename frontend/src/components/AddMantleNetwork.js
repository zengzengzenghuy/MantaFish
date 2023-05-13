import React,{useState} from "react";
import { ethers } from 'ethers';
import { useNavigate,Link } from "react-router-dom";
import * as dotenv from 'dotenv';
import Header from "./Header";
import AAE_ABI from "../artifacts/contracts/AskAndEarn.sol/AskAndEarn.json";
import BIT_ABI from "../artifacts/contracts/BitToken.sol/BitToken.json";

dotenv.config();

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
//const provider = new ethers.providers.Web3Provider(window.ethereum);
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

  async function getMantleFaucet(){
    window.location.href= 'https://faucet.testnet.mantle.xyz/'
  }

  async function bridgeBITfromGoerli(){
    window.location.href='https://bridge.testnet.mantle.xyz/'
  }
  async function depositBIT(){
    await connectAccount();

    const BITcontractAddr = "0xab6f51b61AdF8B542a569E94e1cAA233DD216862";
    // const AAEcontractAddr = "0xcF7E187Ed1090B9CE8E4a7266B5309d839E85648";
    const AAEcontractAddr = "0x520185210Aa645220a49afD9C33d28b73494e14d"
    let bit= new ethers.Contract(BITcontractAddr,BIT_ABI.abi,provider.getSigner());
    let aae = new ethers.Contract(AAEcontractAddr,AAE_ABI.abi,provider.getSigner());
    //await bit.transfer(AAEcontractAddr,10);
    let result = await aae.playTest();
    //let result = await bit.mint("0x5f9e06Fd34A67637315e7dCe6866A4D3783E014E",100);
    //let result = await bit.balanceOf("0x5f9e06Fd34A67637315e7dCe6866A4D3783E014E");

    console.log(result);
  }

  const buttonStyle = {
    'width': '20%',
    'height': '3rem',
    'background-color': 'blue',
    'fontSize' : '1rem',
    'align-items': 'center',
    'left' : '0',
    'display': 'flex',
    'flex-direction':'row',
    'justify-content' :'center',
    'border-radius': '25px',
  }
  const stepStyle = {
    'width': '75%',
    'height': '4rem',
    'background-color': '#8a2b06',
    'fontSize' : '1rem',
    'align-items': 'center',
    'left' : '0',
    'display': 'flex','flex-direction':'row',
    'justify-content':'flex-start',
    'gap' : '20px',
    'margin-top': '20px',
    'margin-bottom': '20px',
    'margin-right': '20px',
    'margin-left': '20px',
    'padding-left': '50px',
    'border-radius': '25px',
  }
  return (
    <>
    <Header/>
    <h1>Before you start the game</h1>
    <div style={stepStyle}>

      <h3>Step 1:</h3>
      <p>To start and play, you have to deposit 10 BIT token on Mantle Network.</p>

 
         <button style={buttonStyle} onClick={connectAccount}>Connect to Metamask</button>
      <p>Connected to {address}</p>  

    </div>

    <div style={stepStyle}>
      <h3>Step 2:</h3>
      <p>Add Mantle Network to your Metamask</p>
      <button style={buttonStyle} onClick={addMantleNetwork}>Add Mantle Network</button>
    </div>

    <div style={stepStyle}>
      <h3>Step 3:</h3>
      <p>Get Mantle Testnet Faucet on Goerli</p>
      <button style={buttonStyle} onClick={getMantleFaucet} >Get $BIT</button>
    </div>

    <div style={stepStyle}>
      <h3>Step 4:</h3>
      <p>Bridge your $BIT to Mantle Testnet</p>
      <button style={buttonStyle} onClick={bridgeBITfromGoerli} >Bridge $BIT</button>
    </div>
    
    <div style={stepStyle}>
      <h3>Step 5:</h3>
      <p>Deposit 10 $BIT to play</p>
      <button style={buttonStyle} onClick={depositBIT} >Play</button>
    </div>
    <div style={{  'display': 'flex','flex-direction':'row',
    'justify-content':'center',  'gap': '50px'}}>    <button onClick={() => navigate('/')}>Go Back to Home Page</button>
  
    <button onClick={() => navigate('/askandearn')}>Go to Play</button></div>

    </>
  );
};


export default AddMantleNetwork;

