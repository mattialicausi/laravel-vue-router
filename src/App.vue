<template>


<div id="my-container">

    <HeaderComponent></HeaderComponent>


    <main>
       <router-view></router-view>
    </main>

  <!-- cursor -->

  <div class="cursor"></div>
  <div class="outline1"></div>
  <div class="outline2"></div>
  <div class="outline3"></div>
  <div class="outline4"></div>
  
</div>

 

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    name: 'App',

    components: { 
      HeaderComponent,
    },

    mounted() {
      // cursor
      let outline1 = document.querySelector('.outline1');
      let outline2 = document.querySelector('.outline2');
      let outline3 = document.querySelector('.outline3');
      let outline4 = document.querySelector('.outline4');
      let cursor = document.querySelector('.cursor');

      document.addEventListener('mousemove', function(e) {
          let x = e.clientX;
          let y = e.clientY;
          
          outline1.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50% ))`;
          outline2.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50% ))`;
          outline3.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50% ))`;
          outline4.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50% ))`;
          cursor.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50% ))`;
      });
    },
}
</script>

<style lang="scss" scoped>

</style>