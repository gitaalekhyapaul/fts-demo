// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {GITAFTSERC20} from "@src/GITAFTSERC20.sol";

contract GITAFTSERC20Script is Script {
    GITAFTSERC20 public erc20;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        erc20 = new GITAFTSERC20();

        vm.stopBroadcast();
    }
}
