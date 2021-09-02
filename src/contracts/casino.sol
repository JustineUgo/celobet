// SPDX-License-Identifier: MIT  

pragma solidity >=0.7.0 <0.9.0;

interface IERC20Token {
  function transfer(address, uint256) external returns (bool);
  function approve(address, uint256) external returns (bool);
  function transferFrom(address, address, uint256) external returns (bool);
  function totalSupply() external view returns (uint256);
  function balanceOf(address) external view returns (uint256);
  function allowance(address, address) external view returns (uint256);

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}


contract casino{
    
    address businessAddress = 0xbA371C3e4eE3127Ca02B83480be3dDF42b61cc1D;
    address[] winners;
    
    uint price = 1;
    // should be a 1000 but for testing purposes it is 3
    uint priceToBeWon = 3;
    uint winnerLength = 0;
    
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;
    
    
    address[] holders;      // PlayerID => participant_address
    mapping (address => uint) Guesses; 
    

    modifier isAdmin(address _address) {
        require(msg.sender == _address,"Accessible only to the admin");
        _;
    }
    
//   function to make a guess
    function makeGuess(uint _guess) public payable returns (uint256 randomNumber){
        require(_guess != 0x20,"cannot be empty");
        require(_guess <= 20,"number should be between 0 and 20");
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                businessAddress,
                price
            ),
            "Transaction Failed"
        );
        holders.push(msg.sender);
        Guesses[msg.sender] = _guess;
        
        uint256 luckyNumber = (uint256(keccak256(abi.encodePacked(block.timestamp,  msg.sender))) % 20) + 1;
        
        if(luckyNumber == _guess){
            winners.push(msg.sender);
            winnerLength++;
        }
        
        return luckyNumber;
        
    }
    
    // function for admin to distribute rewards
    function claimReward()public payable isAdmin(businessAddress){
        if(winnerLength == 0){
            return;
        }
        for(uint i = 0; i < winnerLength; i++){
            require(
    		  IERC20Token(cUsdTokenAddress).transferFrom(
    			businessAddress,
    			winners[i],
    			priceToBeWon
    		  ),
    		  "Transfer failed."
		    );    
        }
        
        deleteAll();
    }
    
    // get the length of the winner list
    function getWinnerLength() public view returns (uint) {
        return (winnerLength);
    }
    // delete the respective fields
    function deleteAll() internal{
        delete winnerLength;
        delete winners;

        
    }
    // find out if a user is an admin
    function isAdminFunction(address _address) public view returns (bool){
        if(_address == businessAddress){
            return true;
        }
        return false;
    }
    
    
    // returns list of player addresses
    function getListOfPlayers() public view returns (address[] memory){
        return holders;
    }
    // return list of winners addresses
    function getListOfWinners() public view returns (address[] memory){
        return winners;
    }
    
    
}