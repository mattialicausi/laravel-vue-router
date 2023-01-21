<template>
    <header class="container d-flex align-items-center justify-content-between">
    
        <div class="container-img-logo h-100 emoji-gsap">
            <img class="h-100" src="../../public/img/logo-portfolio_adobe_express.svg" alt="img logo">
        </div>

        <div id='menu' :class="hamburgerOpen == true ? 'rotate' : '' " @click="openHamburger()">
            <div class='menu-line1' :class="hamburgerOpen == true ? 'rotate1' : '' "></div>
            <div class='menu-line2' :class="hamburgerOpen == true ? 'rotate2' : '' "></div>
        </div>

        
        <div class='nav-page1' :class="hamburgerOpen == true ? 'transform' : '' ">
            <span v-for="(item, index) in menuItems" :key="index">
                <router-link :to="{name: item.routeName}" active-class="active" class="nav-link" @click="openHamburger()">{{ item.label }}</router-link>
            </span>
        </div>
        <div class='nav-page2' :class="hamburgerOpen == true ? 'transform' : '' "></div>
    </header>
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