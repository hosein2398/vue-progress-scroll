<template>
  <div>
    <div class="bar" :style='style'></div>
    <div class="p-wrapper">
      <slot></slot>
    </div>
  
  </div>
</template>

<script>
  export default {
    name: 'vue-progress-scroll',
    props: ['background'],
    data() {
      return {
        style: null
      }
    },
    mounted() {
      
      // we get nextTick so  that we are sure that DOM is fully loaded 
      this.$nextTick(function() {
        var theElement = document.getElementsByClassName('p-wrapper')[0];
        var backColor = this.background || 'rgb(245, 107, 107)'
        function calc(){
          var top = theElement.getBoundingClientRect().top - (window.innerHeight / 2);
          var height = theElement.getBoundingClientRect().height; 
          var calculatedValue = Math.abs(top) / height * 100;
          if (top  < 0) {
            this.style = 'width:' + calculatedValue + '%; background:' + backColor;
          } else {
            this.style = 'width:0';
          }
          if (calculatedValue >= 100) {
            this.$emit('complete')
          }
        }
        window.addEventListener('scroll', calc.bind(this)); // scroll
        window.addEventListener('resize', calc.bind(this)); // resize

      }); // nextTick
  
    }
  }
</script>

<style scoped>
  .bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 5px;
    box-shadow: 0 2px 5px 0 #828282;
  }
</style>