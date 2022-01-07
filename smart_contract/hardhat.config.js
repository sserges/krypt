// https://eth-ropsten.alchemyapi.io/v2/AMPOEE7CpQmjDclNFlHn8TQQlPwr6Qlb

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/AMPOEE7CpQmjDclNFlHn8TQQlPwr6Qlb',
      accounts: [
        '66cd2777bdb5de4bbcbc076f4f2a0340eb4b8bc8d008dd9114c41e5e1d1981ad',
      ],
    },
  },
}
