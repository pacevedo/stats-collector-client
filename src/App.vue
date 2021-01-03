<template>
  <h2>Stats collector</h2>
  <div id="nav">
    <router-link to="/">Round collector</router-link> |
    <router-link to="/player">Player collector</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App'
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
.loading {
  width: 40px;
  margin-left: 20px;
}
#nav {
  text-align: center;
  font-size: 14px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #bd910f;
}

</style>
