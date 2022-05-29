// import ETLCoin from './contracts/ETLCoin.json';
import GuessTheCardReward from './contracts/GuessTheCardReward.json';

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [GuessTheCardReward],
  events: {
    GuessTheCardReward: ['RewardedPlayer']
  },
  polls: {
    accounts: 15000
  }
}

export default options
