<template>
    <div id="work-component">
        <div class="row h-100 position-relative">
            <div class="col-7">
                <div class="container-img">
                    <img :src="`${store.imgBasePath}${project.thumb1}`" alt="img of + project.title">
                </div>
            </div>
            <div class="col-5">
                <div class="container-title-project">
                    <h3>{{ project.title }}</h3>
                </div>

                <div class="container-box-description rounded">
                    <p>{{project.description }}</p>
                </div>

                <div class="extra">
                    <div class="d-flex align-items-center justify-content-between" v-if="project.technology">
                        <h5>{{ project.technology.name }}</h5>

                        <a href="{{ project.url }}"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>

import {store} from '../store';

    export default {

        name: 'WorkComponent',

        props: {
            project : Object
        },

        data() {
            return {
                store,
              

            }
        },
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
@import '../assets/styles/partials/variables';

#work-component {
    color: $white;
    height: 50rem;
    width: 100rem;
    margin: 0 auto;
    padding-bottom: 5rem;

    .col-7 {
        display: flex;
        align-items: flex-end;

            .container-img {
            width: 100%;
        
                    img {
                        width: 100%;
                        opacity: 0.4;
                        transition: 300ms ease-in-out;

                        &:hover {
                            opacity: 1;
                            transition: 300ms ease-in-out;
                        }
                    }
            }
    }


        
    .container-title-project {
        width: 100%;
        display: flex;
        justify-content: end;

        h3 {
            font-size: 3.5rem;
            padding-top: 4rem;
            padding-right: 4rem;
            font-weight: bold;
            color: $green;
        }

    }

    .container-box-description {
        padding: 30px;
        background-color: rgba(30, 30, 30, 0.673);
        color: $white;
        line-height: 2rem;
        font-size: 1.2rem;
        text-align: end;
    }

    .col-5 {
        position: absolute;
        top: 5rem;
        right: 6.5rem
    }

    .extra {
        padding-top: 3rem;
        padding-left: 3rem;

        a {padding: 0;}

        .fa-brands {
            font-size: 4rem;
            background-color: $dark;
            color: $light-green;
            text-decoration: none;
            transition: background-color 600ms ease-in-out;
            transition: color 400ms ease-in-out;
           
            padding: -1px;

            // &:hover {
            //     background-color: $light-green;
            //     color: $dark;

                
            //     transition: background-color 400ms ease-in-out;
            //     transition: color 600ms ease-in-out;
            // }
        }

    }
 
}



</style>