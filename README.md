
# vue-progress-scroll

> Vue tiny plugin to show a progress bar while user is reading an article or ... 

## Installing 
Get from npm:
```js
npm i -D vue-progress-scroll
```
And use this inside your app:
``` js
import Vue from 'vue'
import App from './App.vue'
import Progress from 'vue-progress-scroll'

Vue.use(Progress);
new Vue({
  el: '#app',
  render: h => h(App)
})
```

