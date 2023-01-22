<template>
    <div id="contact-page">
        <div class="container">
            <ContactForm/>
         </div>

         <SocialComponent/>
    </div>
</template>

<script>

import ContactForm from '../components/ContactForm.vue';
import SocialComponent from '../components/SocialComponent.vue';

    export default {
        name: 'ContactPage',

        components: {
            ContactForm,
            SocialComponent
        }

    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
@import '../assets/styles/partials/variables';

#contact-page {
    background-color: $dark;
    height: 85vh;

}


</style>