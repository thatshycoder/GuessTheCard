<template>
    <div class="flex h-screen">
        <div class="m-auto">
            <h2 class="text-6xl mb-5">You Won!</h2>
            <h4 class="mb-5">Reward: <strong>{{ $store.state.rewardAmount }} ETL</strong></h4>
            <button id="claim-reward" type="button" v-if="activeAccount" @click.prevent="claimReward"
                class="rounded-full bg-white text-rose-500 px-5 py-3">Claim Reward</button>
            <p v-else class="text-yellow-200">Connect MetaMask wallet to claim reward</p>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'WonLevel',

    computed: {

        ...mapGetters('accounts', ['activeAccount']),
        ...mapGetters('drizzle', ['isDrizzleInitialized']),
        ...mapGetters('drizzle', ['drizzleInstance'])
    },

    methods: {

        claimReward() {

            const router = this.$router;

            this.drizzleInstance.contracts.GuessTheCardReward.methods.rewardPlayer(this.activeAccount, this.$store.getters.getRewardAmount).send({ from: this.activeAccount }, function (error, result) {
                if (!error) {
                    router.push('/');
                } else if (error.code == '-3260') {

                    alert('Connect MetaMask wallet to claim reward');
                }
            });
        }
    }
}
</script>
