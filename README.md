# MantaFish

Manta Fish is an onboarding platform to learn about [Mantle Network](https://www.mantle.xyz/), powered by [AI](https://www.mendable.ai/).  

## How to use?
There are two modes:
1. Chat with Manta: User can ask Manta any question about Manta, and get the answer within seconds. There is also a built in tweet option for user to share their learning on twitter.
2. Manta BIT: User can learn about how to use Metamask to interact with Mantle Network, and stand a chance to win $BIT token for just depositing 10 $BIT per entry. 

## Key components
1. Frontend: under `/frontend` directory, built by Reactjs.
2. Smart Contract: under `/contract` directory, built by Solidity, deployed to Mantle Testnet.
3. AI: Leverage the AI tool built by [Mendable AI](https://www.mendable.ai/).
4. Social Media: Users can share tweets about their learning by built in tweet button.

# For Developer
## Frontend
Install and Run
```bash
cd frontend
npm i  //install dependencies
npm start  //start on localhost:3000
```

To use Mendable AI, you will need the `anon_key`, you can get it by registering on [Mendable AI](https://www.mendable.ai/).
It is hardcoded into the `frontend/src/components/ChatManta.js` at the moment, please don't abuse it.

## Contract
Install

```bash
cd contract
npm i
```

Configure the private key in `hardhat.config.js` and deploy to Mantle Network.
```bash
npx hardhat run scripts/deployAll.js --network mantle-testnet
```

Run test
``bash
npx hardhat test
```

* The contract has not been tested at the moment.
* Due to bridge issue, I cannot bridge my $BIT to Mantle, so I'm not able to deploy the contract at the moment.

