<template>
    <div>
      <vue-particles
            id="tsparticles"
            :options="options"
            url="/json/particles.json"
            :particles-init="particlesInit"
        />
        <!-- App Header -->
        <AppHeader/>
        <!-- AppHeader -->

        <!-- page view -->
        <slot/>
        <!-- page view -->
    </div>
</template>

<script>
import { loadFull } from "tsparticles";

export default {
    name: "NuxtTutorial",
    data() {
        return {
            options: {
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                particles: {
                    color: {
                        value: "#000"
                    },
                    links: {
                        color: "#000",
                        enable: true
                    },
                    move: {
                        enable: true
                    },
                    number: {
                        value: 100
                    }
                }
            }
        };
    },
    methods: {
        particlesInit: async (engine) => {
            await loadFull(engine);
        }
    }
};
</script>
<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.header__name {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.header__verification {
    color: #1da1f2;
    padding-left: 0.25em;
}
.header__official {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    color: #818a91;
    font-weight: 400;
    font-size: .875rem;
    line-height: 1;
}
</style>