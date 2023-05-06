// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./BitToken.sol";
import "./ManNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AskAndEarn is Ownable {
  
  BitToken BIT;
  MANNFT ManNFT;
  uint256 public minTokenperPlay = 10; //10 BIT
  uint256 public totalPlayer;
  uint256 public currentRound;
  uint256 public prize;
  mapping(address=>uint256)public userContribution;
  mapping(uint256=>address)public userIndex;
  mapping(uint256=>address)public winnerHistory;
  address [] winnerList;

  constructor(address _bit,address _nft){
      BIT = BitToken(_bit);
      ManNFT = MANNFT(_nft);
  }

  function setMinEntryAmount(uint256 _minToken)external onlyOwner{
      minTokenperPlay=_minToken;
  }
  
  function setPrize(uint256 _newPrize)external onlyOwner{
      prize=_newPrize;
  }

    function play(uint256 _paidAmount)public returns (bool){
        require(_paidAmount>=minTokenperPlay,"Not sufficient amount to play!");
        require(msg.sender!=address(0),"Invalid address");
        if(userContribution[msg.sender]==0){
            ManNFT.safeMint(msg.sender,totalPlayer);
            userIndex[totalPlayer] = msg.sender;
            totalPlayer+=1;

        }
        BIT.transferFrom(msg.sender,address(this),_paidAmount);
        userContribution[msg.sender]+=_paidAmount;
        return true;
    }

    function LuckyDraw(bool _paidByOwner) external onlyOwner returns(bool){
       uint256 winner_index = uint256(
            keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp))
        ) % totalPlayer;
        address winner = userIndex[winner_index];
        winnerHistory[currentRound] = winner;
        
        if(_paidByOwner){
            require(BIT.balanceOf(owner())>=prize,"Not enough balance for prize!");
            BIT.transferFrom(owner(),winner,prize);
        }else{
            require(BIT.balanceOf(address(this))>=prize,"Not enough balance for prize!");
            BIT.transferFrom(address(this),winner,prize);
        }

        currentRound+=1;
        return true;
    }

    function winnerlist() public returns(address [] memory){
     
        for (uint256 i=0;i<currentRound;i+=1){
            winnerList.push(winnerHistory[i]);
        }
        return winnerList;
    }
    function getPoolPrize() public view returns (uint256){
        uint256 allowanceFromOwner = BIT.allowance(owner(),address(this));
        return BIT.balanceOf(address(this))+ allowanceFromOwner;
    }
}
