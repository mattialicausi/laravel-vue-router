<template>

  <HeaderComponent></HeaderComponent>
  <router-view></router-view>

  <main>
    Sono il main
  </main>

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    components: { 

      HeaderComponent,

    }
}
</script>

<style lang="scss" scoped>

</style>