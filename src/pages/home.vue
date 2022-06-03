<template>
    <section class="homeContent">
    <div class="fadeup-enter-done"><h1>Hi, my name is</h1></div>
    <div class="fadeup-enter-done">
        <h2 class="big-heading">Benson Arafat</h2>
    </div>
    <div class="fadeup-enter-done">
        <h3 class="big-heading">  <VueWriter :array="arr" /></h3>
    </div>
    <div class="fadeup-enter-done">
        <p>
        I'm a software engineer specializing in building (and occasionally in the backend) exceptional digital experiences. Currently, I'm focused on building web applications at <a href="https://www.jubileesys.com/" target="_blank" rel="noreferrer">Jubilee System</a>.
        </p>
    </div>
    </section>
</template>


<style>
.homeContent h1 {
    margin: 0px 0px 5px 4px;
    color: #64ffda;
    font-size: clamp(14px,5vw,16px);
    font-weight: 400;
}

.big-heading {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
    color: #a8b2d1;
    line-height: 1.1;
}
.homeContent h3 {
    margin-top: 10px;
    color: #8892b0;
    line-height: 0.9;
    font-family: "Calibre";
}
.homeContent h2{
    font-family: "Calibre";
}
.homeContent p {
    margin: 20px 0px 0px !important;
    max-width: 540px;
}

</style>
<script>
// import anime from 'animejs';

// var tl = anime.timeline({
//   easing: 'easeOutExpo',
//   duration: 750
// });
export default{
    name: "HomePage",
    data() {
      return { arr: ["I build things for the web.", "I also build awesome apps."] };
    },
    mounted (){
        // this
        // .add({
        // targets: '.basic-timeline-demo .el.square',
        // translateX: 250,
        // })
    
    }

}
</script>