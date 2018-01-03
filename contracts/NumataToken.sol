pragma solidity ^0.4.17;


import 'zeppelin-solidity/contracts/token/MintableToken.sol';
import 'zeppelin-solidity/contracts/token/PausableToken.sol';
import 'zeppelin-solidity/contracts/token/BurnableToken.sol';

/**
 * @title NumataToken
 * @dev Very simple ERC20 Token example
 */
contract NumataToken is MintableToken, PausableToken, BurnableToken {

    string public constant name = "NumataToken";
    string public constant symbol = "NMT";
    uint8 public constant decimals = 18;

    uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    function NumataToken() public {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }

}