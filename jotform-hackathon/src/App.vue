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
html, body {
  background-color: #e0f7fa;
}
</style>
