<template>
  <h2>Stats collector</h2>
  <round-form />
</template>

<script>
import RoundForm from './components/RoundForm.vue'

export default {
  name: 'App',
  components: {
    RoundForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #f0c07a;
}
h2 {
  text-align: center;
}
button {
	background-color:#bd910f;
	border-radius:10px;
	border:1px solid #755a0b;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding: 10px 16px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffbf00;
}
button:hover {
	background-color:#948121;
}
button:active {
	position:relative;
	top:1px;
}
</style>
