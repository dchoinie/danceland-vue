<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  /* Utility Classes */
  .mt-1 {
    margin-top: 1rem;
  }
  .mt-2 {
    margin-top: 2rem;
  }
  .mt-3 {
    margin-top: 3rem;
  }
  .mt-4 {
    margin-top: 4rem;
  }
  .mb-1 {
    margin-bottom: 1rem;
  }
  .mb-2 {
    margin-bottom: 2rem;
  }
  .mb-3 {
    margin-bottom: 3rem;
  }
  .mb-4 {
    margin-bottom: 4rem;
  }
  .pt-1 {
    padding-top: 1rem;
  }
  .pt-2 {
    padding-top: 2rem;
  }
  .pt-3 {
    padding-top: 3rem;
  }
  .pt-4 {
    padding-top: 4rem;
  }
  .pb-1 {
    padding-bottom: 1rem;
  }
  .pb-2 {
    padding-bottom: 2rem;
  }
  .pb-3 {
    padding-bottom: 3rem;
  }
  .pb-4 {
    padding-bottom: 4rem;
  }
  .p-1 {
    padding: 1rem;
  }
  .p-2 {
    padding: 2rem;
  }
  .p-3 {
    padding: 3rem;
  }
  .p-4 {
    padding: 4rem;
  }
</style>
