
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

And if you want to use from browser, simply :
```js
<script src='./vue-progress-scroll.js'></script>
```
## Usage
Usage is really simple, just put the content inside `progress-scroll` tag.

Example:
```html
<progress-scroll>
	Here is the article main part.
	lorem...
	....
	...
	..
</progress-scroll>
```

## Events
vue-progress-scroll fires `complete` event when you reach end of scroll. Example:
```html
<progress-scroll @complete='runMyMethod'>
	Here is the article main part.
	lorem...
	....
	...
	..
</progress-scroll>
```
## Props
There is a `background` prop which defines the background color of bar:
```html
<progress-scroll background='#abfbc6'>
	Here is the article main part.
	lorem...
	....
	...
	..
</progress-scroll>
```