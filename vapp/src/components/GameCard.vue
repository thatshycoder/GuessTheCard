<template>
    <div class="grid gap-4" :class="gridColClass">
        <div v-for="(n, i) in getRandomNumbers" :key="i" @click="submitGuess(n)" :class="[getActiveGuess(n), colHeight]"
            class="flex items-center place-content-center text-rose-600 hover:text-gray-100 shadow-lg shadow-grey-500/50 hover:scale-x-110 hover:bg-red-500">
            <h3 class="text-6xl" v-if="$store.state.submittedGuess">{{ n }}</h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EasyLevel',

    data() {
        return {
            gridColClass: 'grid-cols-4',
            colHeight: this.$store.state.randomNumbers.length > 4 ? 'w-[130px] h-[200px]' : 'w-[250px] h-[400px]'
        }
    },

    computed: {
        getRandomNumbers() {
            return this.$store.state.randomNumbers;
        }
    },

    methods: {
        getActiveGuess(n) {
            return this.$store.state.guess == n ? 'bg-yellow-100' : 'bg-blue-100';
        },

        submitGuess(guess) {
            this.$store.commit('setGuess', guess);
        }
    }
}
</script>
