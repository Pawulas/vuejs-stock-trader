<template>
  <div>
    <h1>Trade or view your portfolio</h1>
    <h6>You may save and load your data</h6>
    <h6>Click on end day to begin a new day</h6>
    <p>Your funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>
