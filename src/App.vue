<template>
  <div class="layout bg-white dark:bg-slate-900 ">
    <AppHeader/>
    <div class="content">
        <router-view/>
        <AppFooter/>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "SFMono";
  src: local("SFMono"),
   url(./assets/fonts/SFMono/SFMonoRegular.otf) format("truetype");
}
@font-face{
  font-family: "Calibre";
  src: local("Calibre"),
   url(./assets/fonts/Calibre/Calibre-Regular.ttf) format("truetype");
}

body::-webkit-scrollbar {
  width:0.3em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px #a8b2d1;
}
 body::-webkit-scrollbar {
    width: 3px;
    height: 4px;
  }
body::-webkit-scrollbar-thumb {
  background-color: #a8b2d1;
  outline: 1px solid #a8b2d1;
   border-radius: 10px;
}

body{
  font-family: 'SFMono';
  color:#8892b0;
  -webkit-font-smoothing: antialiased;
  line-height: 1.3;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0px 0px 10px;
    font-weight: 600;
    color: #ccd6f6;
    line-height: 1.1;
}
p > a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    color: #64ffda;
    font-family: "Calibre";
}

section {
    margin: 0px auto;
    padding: 100px 0px;
    max-width: 1000px;
}

 .numbered-heading {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-family: "Calibre";
    font-size: clamp(26px,5vw,32px);
    white-space: nowrap;
    font-weight: 600;
}


</style>
<script>

import AppHeader from './components/header';
import AppFooter from './components/footer';
export default {
  name: 'App',
  components: {
    AppHeader, 
    AppFooter,
  }
}
</script>

