// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GITAFTSERC20 is ERC20 {
    constructor() ERC20("GITA FTS ERC20", "GITAFTS") {
        _mint(msg.sender, 10 ** 18);
    }
}
