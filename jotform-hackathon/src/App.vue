<template>
  <div id="app">
    <MainTopbar />
    <router-view></router-view>
  </div>
</template>

<script>
import MainTopbar from './components/MainTopbar.vue';

export default {
  name: 'App',
  components: {
    MainTopbar
  }
};
</script>

<style>
</style>
