<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'


export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .year-header {
    background-color: #343a40;
    height: 50vh;
  }

  .year-content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
  }
</style>
