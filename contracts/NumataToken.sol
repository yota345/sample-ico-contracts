pragma solidity ^0.4.17;


import "zeppelin-solidity/contracts/token/MintableToken.sol";
import "zeppelin-solidity/contracts/token/PausableToken.sol";
import "zeppelin-solidity/contracts/token/BurnableToken.sol";


/**
 * @title NumataToken
 * @dev Very simple ERC20 Token example
 */
contract NumataToken is MintableToken, BurnableToken {

    string public constant name = "NumataToken";
    string public constant symbol = "NMT";

    // same as ether. (1ether=1wei * (10 ** 18))
    uint8 public constant decimals = 18;

}