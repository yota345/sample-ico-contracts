pragma solidity ^0.4.17;


import './MultiSigWallet.sol';


/**
 * The Multisignature wallet contract of NUMATA project.
*/
contract NumataFund is MultiSigWallet {

    function NumataFund(address[] _owners, uint _required) public
        validRequirement(_owners.length, _required)
        MultiSigWallet(_owners, _required)
    {}
}
