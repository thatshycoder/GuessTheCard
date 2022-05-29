const storeOptions = {
  state() {
    return {
      hiddenNumber: 0,
      randomNumbers: [],
      guess: 0,
      submittedGuess: false,
      rewardAmount: 0,
    };
  },

  mutations: {
    setHiddenNumber(state, payload) {
      state.hiddenNumber = payload;
    },

    setRandomNumbers(state, payload) {
      state.randomNumbers = payload;
    },

    submitGuess(state, payload) {
      state.submittedGuess = payload;
    },

    setGuess(state, payload) {
      state.guess = payload;
    },
    
    setRewardAmount(state, payload) {
      state.rewardAmount = payload;
    }
  },

  getters: {
    getRandomNumbers: () => (cards) => {
      var randomNumbers = [];

      while (randomNumbers.length < cards) {
        var r = Math.floor(Math.random() * cards) + 1;
        if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
      }

      return randomNumbers;
    },

    getRewardAmount(state) {
      return state.rewardAmount * 10 ** 2;
    },
  },

  actions: {
    updateRandomNumbers({ commit, getters }, cards) {
      commit('setRandomNumbers', getters.getRandomNumbers(cards));
    },

    updateRewardAmount({ commit }, amount) {
      commit('setRewardAmount', amount);
    }
  },
  modules: {},
};

export default storeOptions;
