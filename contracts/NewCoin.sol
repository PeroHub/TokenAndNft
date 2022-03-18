// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NewCoin is ERC20, Ownable {
    
    constructor() ERC20("MintedToken", "MTK") {
        _mint(msg.sender, 10 ** 6 *  10 ** 18);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    //msg.value is in wei 1 ** 18 * 0.1

    function buyToken (address receiver) public payable {
        require(msg.value > 0, "You cannot mint, your balance is low");
        
        uint256 Rate = 1000;
        uint256 amount = msg.value * 10 ** 18  * Rate;
       
        _mint(receiver, amount);
        // totalSupply = amount;
        // value += amount;
    }
}
