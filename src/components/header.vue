<template>
    <Carousel autoplay v-model="value2" class="a1">
        <Carousel-item>
            <div class="demo-carousel">
              <img src="../assets/imgs/1.jpg" alt="" width="100%">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              <img src="../assets/imgs/2.jpg" alt="" width="100%">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              <img src="../assets/imgs/3.jpg" alt="" width="100%">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              <img src="../assets/imgs/4.jpg" alt="" width="100%">
            </div>
        </Carousel-item>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
<style>
  .a1{
    width: 100%;
    height: 500px;
  }
</style>
