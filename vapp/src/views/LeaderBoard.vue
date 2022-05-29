<template>
  <div v-if="isDrizzleInitialized">
    <div class="flex h-screen">
      <div class="m-auto text-center">
        <div v-if="getRewardedPlayers().length !== 0" class="mb-5">
          <div v-for="(n, i) in getRewardedPlayers()" :key="i">
            <strong class="text-yellow-200">Account:</strong> {{ n[0] }} || <strong
              class="text-yellow-200">Reward:</strong> {{ n[1] / 10 ** 2 }} ETL
          </div>
        </div>
        <div v-else class="mb-5">
          No winners yet. Play to be the first!
        </div>
        <router-link to="/" class="rounded-full bg-white hover:bg-gray-200 py-3 px-5 text-rose-500">Play Game</router-link>
      </div>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';

const args = { contractName: 'GuessTheCardReward', method: 'getRewardedPlayers', methodArgs: [] }

export default {

  mounted() {
    this.$store.dispatch('drizzle/REGISTER_CONTRACT', args);
  },

  computed: {

    ...mapGetters('drizzle', ['isDrizzleInitialized']),
    ...mapGetters('contracts', ['getContractData'])
  },

  methods: {

    getRewardedPlayers() {
      let data = this.getContractData({
        contract: args.contractName,
        method: args.method
      });

      if (data === 'loading') return false;

      return data;
    }
  }

}
</script>
