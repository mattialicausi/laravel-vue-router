<template>
   <div id="index-guest">
        <div class="container">
            <div class="row h-100 d-flex align-items-center h-100">
                <div class="col-6 my-flex h-100">
                    <div class="text-uppercase my-lineheight my-fs-3 mb-3">hi there <span>👋</span> i'm</div>
                    <h2 class="my-lineheight my-fs-1 fw-bold">Mattia</h2>
                    <h2 class="my-lineheight my-fs-1 fw-bold">Li Causi</h2>
                    <h4 class="my-lineheight my-fs-3">Full stack junior developer <span>😎</span></h4>
                    <p class="my-lineheight my-fs-2">I'm a student of the Boolean Academy and I love developing front-end.</p>
                    <button class="my-btn rounded-pill"><a href="{{url('/projects') }}">See my projects</a></button>
                </div>

                <div class="col-6 my-flex align-items-center h-100">
                    <img src="../../public/img/my-memoji-portfolio.png" alt="image avatar">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeComponent',

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
    }
}

.my-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>