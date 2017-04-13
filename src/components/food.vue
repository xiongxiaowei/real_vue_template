<template lang="html">
  <div>
    <div v-for="(val,index) in msg">
      <h1>{{val.name}}</h1>
      <p>{{val.description}}</p>
      <img :src="val.avatar" alt="" width="30" height="30">
      <p v-html=val.infos></p>
    </div>

 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      msg: {}
    }
  },
  mounted() {
    this.fitchData()
  },
  methods: {
    fitchData() {
      // console.log(this.$http.get)

      this.$http.get('static/data/data1.json').then(function(res) {
        console.log(res.data)
        this.msg = res.data
      }.bind(this)).catch(function(error) {
        console.log('foods 页面：', error)
      })
    }
  }
}
</script>

<style>
p{
  text-indent: 2em;
  color: blue;
  font-family: "微软雅黑";
  text-align:left;
}
</style>
