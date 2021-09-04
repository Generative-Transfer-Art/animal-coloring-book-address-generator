// SPDX-License-Identifier: MIT

const { ethers } = require('ethers')
const targetH = 12; // The H value you want
// colors are in HSL but S is fixed at 100% and L is fixed at 50%
var wallet;
var addressH = -1
while(addressH != targetH){
    wallet = ethers.Wallet.createRandom()
    addressH = ethers.BigNumber.from(ethers.utils.keccak256(wallet.address)).mod(360).toNumber()
}
console.log(`address: ${wallet.address}`)
console.log(`private key: ${wallet.privateKey}`)