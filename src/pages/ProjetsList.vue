<template>
    <div id="works-page">
        <div class="container">
            <h2 class="my-fs-1 fw-bold">Some Things I’ve Built</h2>
        </div>

        <div class="my-container" v-for="(project, index) in projects" :key="index">
            <WorkComponent :project="project"/>
        </div>
    </div>
    
   

    <!-- <div class="row">
        <div class="card col-3" style="width: 18rem;" v-for="(project, index) in projects" :key="index">
            <img :src="`${store.imgBasePath}${project.thumb1}`" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">{{ truncateText(project.description) }}</p>
               
               <router-link class="btn btn-primary" :to="{name: 'single-project', params: {slug: project.slug}}">More...</router-link>
            </div>
        </div>
    </div>
     -->
</template>

<script>

import axios from 'axios';
import {store} from '../store';
import WorkComponent from '../components/WorkComponent.vue';

    export default {
        name: 'ProjectsList',

        components: {
            WorkComponent,
        },
        
        data () {
            return {
                store, 
                projects: [],
                // contentMaxLen: 100,

            }
        },

        methods: {
            getProjects() {
                axios.get(`${this.store.apiBaseUrl}/projects`).then ((res) => {

                    this.projects = res.data.results.data;
                    console.log(this.projects);

                })
            },

            // truncateText (text) {

            //     if(text.length > this.contentMaxLen) {
            //         return text.substr(0, this.contentMaxLen) + '...';
            //     }

            //     return text;
            // }
        },

        mounted() {
            this.getProjects();
        },
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
@import '../assets/styles/partials/variables';

#works-page {
    background-color: $dark;
    min-height: 100vh !important;

    h2 {
        color: $white;
        padding-top: 5rem;
    }
}

</style>