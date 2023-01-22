<template>
   <div id="index-guest">
        <div class="container">
            <div class="row h-100 d-flex align-items-center h-100">
                <div class="col-6 my-flex h-100">

                    <transition appear @before-enter="beforeEnter2" @enter="enter2">
                        <div class="text-uppercase my-lineheight my-fs-3 mb-3">hi there <span>👋</span> i'm</div>
                    </transition>

                    <transition appear @before-enter="beforeEnter1" @enter="enter1">
                        <h2 class="my-lineheight my-fs-1 fw-bold">Mattia Li Causi</h2>
                    </transition>
                   
                    <transition appear @before-enter="beforeEnter2" @enter="enter2">
                        <h4 class="my-lineheight my-fs-3">Full stack junior developer <span>😎</span></h4>
                    </transition>


                    <transition appear @before-enter="beforeEnter2" @enter="enter2">
                        <p class="my-lineheight my-fs-2">I'm a student of the Boolean Academy and I love developing front-end.</p>
                    </transition>


                    <transition appear @before-enter="beforeEnter1" @enter="enter1">
                        <a class="my-btn rounded-pill" href="http://localhost:5174/projects">See my works</a>
                    </transition>

                </div>

                <div class="col-6 my-flex align-items-center h-100">

                    <transition appear @before-enter="beforeEnter2" @enter="enter2">
                        <img src="../../public/img/my-memoji-portfolio.png" alt="image avatar">
                    </transition>
                    
                </div>
            </div>
        </div>

       <SocialComponent/>
    </div>
</template>

<script>
import  gsap  from "gsap";
import {ref} from 'vue';
import SocialComponent from "../components/SocialComponent.vue";

    export default {
    name: "HomeComponent",

    component: {
        SocialComponent,
    },

    
    setup() {
        const beforeEnter1 = (el) => {
            el.style.transform = "translateX(-300px)";
            el.style.opacity = 0;
        };
        const enter1 = (el) => {
            gsap.to(el, {
                duration: 1,
                x: 0,
                opacity: 1,
                ease: "bounce.out",
            });
        };
        const beforeEnter2 = (el) => {
            el.style.opacity = 0;
        };
        const enter2 = (el) => {
            gsap.to(el, {
                duration: 3,
                opacity: 1,
                ease: "bounce.out",
            });
        };
        return { beforeEnter1, enter1, beforeEnter2, enter2 };
    },
    components: { SocialComponent }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
@import '../assets/styles/partials/variables';

#index-guest {
    height: 100vh;
    background-color: $dark;
    color: $white;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    h4 {
        color: $green;
    }

    img {
        height: 35rem;
        padding-bottom: 3rem;
        padding-left: 6rem;
    }
}

.my-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
}



</style>