require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth mirror come grace phone outer skin'; 
let testAccounts = [
"0x1996e10e4663d1d70c0f732dcffd339c3c9e9ae7d20e5b38a4ac6defd6739120",
"0x133be7d58c6f73595b4f25989da8a53df49c0016363336ceb3386e02ea57a2aa",
"0xb2ad569ae83f3b7746dd7e77cb67488a07a4b38d78a61d9bbf429acb399abd8f",
"0x4e4ed27f914545f6473e95d2bce5910c756dec2511840781d1598fb8ff5d0af8",
"0x889670d7a349a6e9d42f0c85201dbb970707c3f45088e03eb1fb38e3f4215f93",
"0xf621767e5b8196d3ba14f1cdf15144bb6d9ecbaf5ca0461114615b014dae50ef",
"0x19bb9ca33629298e0c6eb8e5b2828f0ea3650845cdbbc6b0dd88a89d06aa0fc3",
"0x28495b2e0292673b6ad963459d0ea3b5a71d3e8712ceb7f1f1a6d786a4b97967",
"0xca0b27bf2bbb5617d407a320c8f8a0f38f19967388074f7d3dcc7e6de576dda6",
"0x947463bc323ea53c53db605b6b98d2907d50910f5618b27ba8afdbc727902032"
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


