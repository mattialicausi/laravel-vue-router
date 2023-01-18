<template>

   <section v-if="project">
        <h1>{{ project.title }}</h1>
        <a href="{{ project.url }}">Visit</a>
    

        <img :src="`${store.imgBasePath}${project.thumb1}`" class="card-img-top" :alt="project.title">
        <p>{{ project.description }}</p>


        <div v-if="project.technology">
            <h5>Technology used: {{ project.technology.name }}</h5>
        </div>
        <div v-else>
            <h5>Technology not specified</h5>
        </div>
        
        <div v-if=" project.devices">
            <h5 v-for="(device, index) in project.devices" :key="index">{{ device.name }}</h5>
        </div>
        <div v-else>
            <h5>Device not specified</h5>
        </div>
        
   </section>

   <section v-else>

   </section>

</template>

<script>

import axios from 'axios';
import { store } from '../store';

    export default {
        name: 'SingleProject',

        data() {
            return {
                store,
                project: null,
            }
        },

        methods: {
            getProject() {
                axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((res) => {

                    if(res.data.success) {

                        this.project = res.data.results;

                    } else {

                        this.$router.push({name: 'not-found'});

                    }

                });
            }
        },

        mounted() {
           this.getProject();
        },

    }
</script>

<style lang="scss" scoped>

</style>