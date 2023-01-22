<template>
    <header id="header">
        <div class="container d-flex h-100 align-items-center justify-content-between">

            <router-link class="container-img-logo h-100 d-flex align-items-center" to="/">
                <img class="h-50" src="../../public/img/MattiaLiCausiwhi (3).svg" alt="img logo">
            </router-link>


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
        </div>
    
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
                        label: 'Works',
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