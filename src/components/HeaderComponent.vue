<template>
    <header>
        <!-- nav bar -->
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
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

.container-img-logo {
    width: 5rem;

    img {
        height: 5rem;
    }
}

</style>