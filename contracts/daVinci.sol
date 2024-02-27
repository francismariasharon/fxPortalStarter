// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract daVinci is ERC721A{

    address public owner;
    string baseUrl="https://gateway.pinata.cloud/ipfs/QmPvFWa2dLWVhLzbUTFg6tgAisTMxYgQ5KjXCehLVfkCYQ";
    uint256 public maxNFT;
    string public prompt_description ;

    constructor() ERC721A("daVinci", "DVC") {
        owner = msg.sender;
        prompt_description ="A time-traveling robot playing chess with da Vinci.";
        maxNFT = 5;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        
        _;
    }

    function mint(uint256 mint_amount) external payable onlyOwner{
        if(totalSupply() + mint_amount > maxNFT){
         revert ("Limit Reached.");
        } 
        _mint(msg.sender, mint_amount);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt_description;
    }
}
