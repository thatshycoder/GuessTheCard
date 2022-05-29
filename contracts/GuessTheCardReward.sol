// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;
pragma experimental ABIEncoderV2;

import './ETLCoin.sol';

contract GuessTheCardReward {

    ETLCoin token;
    address owner;

    struct Winner {
        address player;
        uint reward;
    }

    Winner[] winners;

    event RewardedPlayer(address player, uint256 amount);
    
    function rewardPlayer(address player, uint256 amount) public {
        token.transfer(player, amount);
        winners.push(Winner(player, amount));

        emit RewardedPlayer(player, amount);
    }  

    function getRewardedPlayers() public view returns(Winner[] memory leaderboard) {
        leaderboard = winners;
    }

    function balanceOf(address player) public view returns(uint256 balance) {
        balance = token.balanceOf(player);
    } 

    constructor() public {
        token = new ETLCoin(); 
        owner = msg.sender;
    }   
}