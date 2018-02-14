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
    data() {
      return {
        style: null
      }
    },
    mounted() {
      // we get nextTick so  that we are sure that DOM is fully loaded 
      this.$nextTick(function() {
        var theElement = document.getElementsByClassName('p-wrapper')[0];
        // getting height of element
        var height = theElement.getBoundingClientRect().height;  
        // attaching a EventListener for scrolling    
        window.addEventListener('scroll', () => {
          var top = theElement.getBoundingClientRect().top - (window.innerHeight / 2);
          var calculatedValue = Math.abs(top) / height * 100;
          console.log(calculatedValue)
          if (top  < 0) {
            this.style = 'width:' + calculatedValue + '%';
          } else {
            this.style = 'width:0';
          }
          if (calculatedValue >= 100) {
            this.$emit('complete')
          }
          
        }); // scroll

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
    background: rgb(245, 107, 107);
    box-shadow: 0px 2px 5px 0px rgb(240, 156, 123)
  }
</style>