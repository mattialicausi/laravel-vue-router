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

        <ul>
            <li style="--i:#a955ff;--j:#ea51ff;">
                <span class="icon"><i class="fa-brands fa-facebook-f"></i>
                    <a href="#"></a>
                </span>
                <span class="titulo">facebook</span>
            </li>
            <li style="--i:#56CCF2;--j:#2F80ED;">
                <span class="icon"><i class="fa-brands fa-twitter"></i>
                    <a href="#"></a>
                </span>
                <span class="titulo">twitter</span>
            </li>
            <li style="--i:#86be6b;--j:#1baf16;">
                <span class="icon"><i class="fa-brands fa-whatsapp"></i>
                    <a href="#"></a>
                </span>
                <span class="titulo">whatsapp</span>
            </li>
            <li style="--i:#80FF72;--j:#5ec3d4;">
                <span class="icon"><i class="fa-brands fa-linkedin-in"></i>
                    <a href="#"></a>
                </span>
                <span class="titulo">linkedin</span>
            </li>
            <li style="--i:#FFA9C6;--j:#F434E2;">
                <span class="icon"><i class="fa-brands fa-instagram"></i>
                    <a href="#"></a>
                </span>
                <span class="titulo">instagram</span>
            </li>
    </ul>
    </div>
</template>

<script>
import  gsap  from "gsap";
import {ref} from 'vue';

    export default {
        name: 'HomeComponent',

        setup() {
            const beforeEnter1 = (el) => {
                el.style.transform = 'translateX(-300px)'
                el.style.opacity= 0
            }

            const enter1 = (el) => {
                gsap.to(el, {
                    duration: 1,
                    x: 0,
                    opacity: 1,
                    ease: 'bounce.out',
                });
            }

            const beforeEnter2 = (el) => {
                el.style.opacity= 0
            }

            const enter2 = (el) => {
                gsap.to(el, {
                    duration: 3,
                    opacity: 1,
                    ease: 'bounce.out',

                });
            }

            return {beforeEnter1, enter1, beforeEnter2, enter2}
        }

        

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

// icon social

ul{
    position: absolute;
    left: 0;
    top: 35%;
    display: flex;
    flex-direction: column;
    gap: 25px
  }
  ul li{
    position: relative;
    list-style: none;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: 0.5s;

 
  }

    .fa-brands{
        color: $white;
    }

  ul li:hover{
    width: 180px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0);
  }
  ul li::before{
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    background: linear-gradient(45deg, var(--i), var(--j));
    opacity: 0;
    transition: 0.5s;
   
  }

  ul li:hover::before{
    opacity: 1;
  }
  ul li::after{
    content: '';
    position: absolute;
    top: 10px;
    width: 100%;
    height: 100%;
    border-radius: 60px;
    background: linear-gradient(45deg, var(--i), var(--j));
    opacity: 0;
    transition: 0.5s;
    z-index: -1;
    filter: blur(15px);
  }
  ul li:hover::after{
    opacity: 0.5;
  }
  ul li i{
    color: #777;
    font-size:  1.75em !important;
    transition: 0.5s;
    transition-delay: 0.25s;
  }
  ul li:hover i{
    transform: scale(0);
    font-size: 1.75em;
    transition-delay: 0.25s;
  }
  ul li span{
    position: absolute;
  }
  ul li .titulo{
    color: #fff;
    font-size: 1.1em !important;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transform: scale(0);
    transition: 0.5s;
    transition-delay: 0s;
  }
  ul li:hover .titulo{
    transform: scale(1);
    transition-delay: 0.25s;
  }

</style>