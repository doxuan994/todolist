<template>
    <div id="app">

        <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/todolist">Todo</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>


        <router-view class="view"></router-view>
    </div>
</template>

<script>
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Todo from './components/Todo'

export default {
    name: 'App',
    components: {
        Home,
        Services,
        About,
        Todo
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
ul {
    list-style: none;
}
</style>
