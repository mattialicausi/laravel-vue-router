<template>
    <h2>Projects List</h2>


    <div class="row">
        <div class="card col-3" style="width: 18rem;" v-for="(project, index) in projects" :key="index">
            <img :src="`${store.imgBasePath}${project.thumb1}`" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">{{ truncateText(project.description) }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    
</template>

<script>

import axios from 'axios';
import {store} from '../store';

    export default {
        name: 'ProjectsList',
        
        data () {
            return {
                store, 
                projects: [],
                contentMaxLen: 100,

            }
        },

        methods: {
            getProjects() {
                axios.get(`${this.store.apiBaseUrl}/projects`).then ((res) => {

                    this.projects = res.data.results.data;
                    console.log(this.projects);

                })
            },

            truncateText (text) {

                if(text.length > this.contentMaxLen) {
                    return text.substr(0, this.contentMaxLen) + '...';
                }

                return text;
            }
        },

        mounted() {
            this.getProjects();
        },
    }
</script>

<style lang="scss" scoped>

</style>