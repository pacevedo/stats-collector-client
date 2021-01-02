<template>
  <h2>Stats collector</h2>
  <div class="container">
    <round-form />
    <round-table />
  </div>
</template>

<script>
import RoundForm from './components/RoundForm.vue'
import RoundTable from './components/RoundTable.vue'

export default {
  name: 'App',
  components: {
	RoundForm,
	RoundTable
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
button:disabled {
  background-color: #aaa6a6;
  color: #000;
}
.container {
  display: grid;
  grid-template-columns: 200px auto
}
label {
  display: block;
}
.form-control {
  background: burlywood;
  border: 1px solid darkslategray;
  margin-top: 5px;
}
input.form-control {
  width: 160px;
}
select.form-control {
  width: 166px;
}
.row {
  margin: 10px;
}
</style>
