<template>
    <!-- <header id="header">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="container-img-logo emoji-gsap">
                    <img class="w-100" src="../../public/img/logo-portfolio_adobe_express.svg" alt="img logo">
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                            <router-link :to="{name: item.routeName}" active-class="active" class="nav-link">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header> -->

    <div id="container-navbar">

        <div id="container-img-navbar">
            <img class="w-100" src="../../public/img/logo-portfolio_adobe_express.svg" alt="img logo">
        </div>

        <div id="container-bars" :class="hamburgerOpen == true ? 'justify-content-center align-items-center' : '' " @click="openHamburger()">
            <div class="my-bar1 rounded-pill" :class="hamburgerOpen == true ? 'top-bar' : '' "></div>
            <div class="my-bar2 rounded-pill" :class="hamburgerOpen == true ? 'd-none' : '' "></div>
            <div class="my-bar3 rounded-pill" :class="hamburgerOpen == true ? 'bottom-bar' : '' "></div>
        </div>

        <div id="container-options">
            <div class="options">Home</div>
            <div class="options">About</div>
            <div class="options">Contact me</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',

        data() {
            return {
                menuItems : [
                    {
                        label: 'Home',
                        routeName: 'home'
                    },
                    {
                        label: 'Projects',
                        routeName: 'projects'
                    },
                    {
                        label: 'About',
                        routeName: 'about'
                    },
                    {
                        label: 'Contacts',
                        routeName: 'contact'
                    }
                ],

                hamburgerOpen: false,

            }
        },

        methods: {
            openHamburger() {
                console.log('funziona');
                this.hamburgerOpen = !this.hamburgerOpen;
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>