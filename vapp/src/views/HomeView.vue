<template>
  <div class="flex h-screen">
    <div class="m-auto text-center">
      <h2 class="text-4xl font-bold text-white underline">Guess<span class="text-yellow-200 italic">TheCard</span></h2>
      <p class="mt-6">
        A card with number <span class="text-2 font-bold">{{ hiddenNumber }}</span> written on it is hidden.
      </p>
      <p class="mb-6">Guess the correct card and win a reward!</p>
      <form @submit.prevent>
        <div class="mb-5">
          Difficulty Level:
          <select name="difficulty-level" @change="difficultySelected($event)"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-rose-500 shadow-sm placeholder-slate-400">
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button @click="startGame" class="rounded-full bg-white hover:bg-gray-200 py-3 px-5 text-rose-500 mb-5">Start Game
        </button>
        <div>
          <router-link to="/leaderboard" class="text-yellow-200 underline">View Winners</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {

    return {
      level: 1,
      cards: 4,
      hiddenNumber: 0,
      easyLevelReward: 1000,
      hardLevelReward: 5000
    }
  },

  mounted() {
    this.getHiddenNumber();
    this.$store.dispatch('updateRewardAmount', this.easyLevelReward);
  },

  methods: {

    getHiddenNumber() {

      // generate and set the hidden number
      var hiddenNumber = this.$store.getters.getRandomNumbers(this.cards * this.level)[0];
      this.$store.commit('setHiddenNumber', hiddenNumber);
      this.hiddenNumber = this.$store.state.hiddenNumber;
    },

    startGame() {

      // reset submitted guess status
      this.$store.commit('submitGuess', false);
      this.$store.commit('setGuess', 0);

      var cards = this.cards * this.level;
      this.$store.dispatch('updateRandomNumbers', cards);
      this.$router.push('/play');
    },

    difficultySelected(event) {

      if (event.target.value == 'hard') {

        // set level and reward amount for each level
        this.level = '2';
        this.$store.dispatch('updateRewardAmount', this.hardLevelReward);

      } else {

        this.level = '1';
        this.$store.dispatch('updateRewardAmount', this.easyLevelReward);

      }

      this.getHiddenNumber();
    }
  }
}
</script>