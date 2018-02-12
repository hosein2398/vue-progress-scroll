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
    name: 'progress-scroll',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        style: null
      }
    },
    mounted() {
      this.$nextTick(function() {
        var theElement = document.getElementsByClassName('p-wrapper')[0];
        var height = theElement.getBoundingClientRect().height;
        // var halfOfWindow = window.innerHeight /2; //this is expriment 
        window.addEventListener('scroll', () => {
          var top = theElement.getBoundingClientRect().top;
          var calculatedValue = Math.abs(top)/ height * 100 ;
          if (top < 0) {
            this.style = 'width:' + calculatedValue + '%';
          }else{
            this.style = 'width:0';            
          }
          if(calculatedValue >= 100){
            this.$emit('complete')
          }
        });
      });
  
    }
  }
</script>

<style scoped>
  .bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height:5px;
    background: rgb(245, 107, 107);
    box-shadow: 0px 2px 5px 0px rgb(240, 156, 123)
  }
</style>