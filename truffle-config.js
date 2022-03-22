const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
module.exports = {
    networks: {
        dev: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "5777"
        },
        prod: {
            // provider: () => new HDWalletProvider(mnemonic, 'https://rpc.truechain.network', 19330),
            provider: () => new HDWalletProvider({
                privateKeys: [mnemonic],
                providerOrUrl: "https://rpc.truechain.network",
                chainId: 19330,
            }),

            network_id: 19330,   // This network is yours, in the cloud.
        },
        bsc_test: {
            provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545/'),
            network_id: 97
        },
        map_main: {
            provider: () => new HDWalletProvider("c74d045255a63ea4ad1749298f2d91e47ddf4decfb8deda21b15b7a37433d95b", 'https://poc2-rpc.maplabs.io'),
            network_id: '22776'   // This network is yours, in the cloud.
        }
    },
    //
    compilers: {
        solc: {
            version: "0.6.12"
        }
    }
};
