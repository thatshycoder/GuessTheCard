// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract ETLCoin is ERC20 {

    string public name = 'ETLCoin';
    string public symbol = 'ETL';
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 12000000000;
    address internal owner;

    constructor() public {
        owner = msg.sender;
        _mint(owner, INITIAL_SUPPLY);
    }
}
