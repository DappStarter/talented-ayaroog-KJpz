require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain connect gesture nature swift sorry'; 
let testAccounts = [
"0xe182eada456e0dc005fd21a96ca5b396bf847eeeda5e75ce38fa9dcac620e52c",
"0x20fda20961e66bebd48b913557dc19a54e33aa274e84ff6573f3688afdde2f9d",
"0x62c3ffaf53cf030eeba1cb43a4345053e50cfde779369162b834f716be4fcbf0",
"0x8f0a20c726b9857ef072e6f2d02720d4d34887800bb1ea7329852cf20bee7179",
"0xfbb646a926668b59b5db1885c4d31ad1c98bb9e234bd2306d8f44936afd71165",
"0x71c027891251c378ceab0166c547520736e5610cbbe89a889766c04d6ac7e3b0",
"0x4e2a26d076eeab144530d20714d165c134d1288e161158f87990c14d15ff1eec",
"0x1ba819ba4078e7a8353e2cd6934dfd35835b254588f5fed447235b3b9cbc9263",
"0x9268504854897e0af5f023c67f4a14cb67887233d6454cc8a6811e63a22a00f7",
"0x159d6d1e35fa7ce2d2b0c7f9b770ca6b07746f2885efb9b34ea2394554c034e6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


