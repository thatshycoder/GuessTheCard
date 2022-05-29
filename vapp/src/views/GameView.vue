<template>
    <div class="container mx-auto">
        <div class="flex h-screen" v-if="!won">
            <div class="m-auto">
                <div class="text-right mb-8">Find the card with number {{ getHiddenNumber }}</div>
                <LostLevel v-if="lost" />
                <GameCard />
                <div class="mt-8">
                    <form action="" @submit.prevent>
                        <div class="">
                            <button class="rounded-full bg-white py-3 px-5 mb-5 text-rose-500" @click="submit"
                                v-if="$store.state.guess !== 0 && !$store.state.submittedGuess">Submit</button><br>
                            <router-link to="/" class="rounded-full bg-white py-3 px-5 text-rose-500">Quit</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <WonLevel v-if="won" />
    </div>
</template>
<script>
import GameCard from '@/components/GameCard'
import WonLevel from '@/components/WonLevel.vue'
import LostLevel from '@/components/LostLevel.vue'

export default {
    name: 'GameView',

    mounted() {

        if (this.$store.state.hiddenNumber == 0) {
            return this.$router.push('/');
        }
    },

    data: function () {
        return {
            won: false,
            lost: false
        }
    },

    computed: {
        getHiddenNumber() {
            return this.$store.state.hiddenNumber;
        }
    },

    methods: {
        submit() {
            this.$store.commit('submitGuess', true);

            if (this.$store.state.guess == this.$store.state.hiddenNumber) {
                this.won = true;
            } else {
                this.lost = true;
            }
        }
    },

    components: {
        GameCard,
        WonLevel,
        LostLevel
    }
}
</script>