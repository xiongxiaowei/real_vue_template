<template lang="html">
  <div>
    <div v-for='val in arr'>
     I like to eat  {{val}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
     return {
         arr: ['apple', 'pear', 'orange']
     }
  }
}
</script>

<style lang="css">
</style>
