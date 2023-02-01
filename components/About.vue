<template>
    <section id="about">
        <div class="flex flex-col flex-1">
            <div class="flex flex-auto flex-col justify-center" :style="{'padding': '2rem 0 4rem'}">
                <div class="flex items-center">
                    <div class="grow flex-1 flex flex-col p-3">
                        <p class="text-4xl font-bold text-[1.4rem]" :style="{'letter-spacing': '1px', 'margin-bottom': '1rem'}">Hello 👋,</p>
                        <h1 class="text-[3.0rem] font-bold" :style="{'line-height':'1', 'margin-bottom': '0.33em'}">I'm Benson Arafat</h1>
                        <div class="text-[2rem] font-light hero__content" :style="{'line-height': '1.4'}">
                            <p class="pb-3">Developer 🍭 at <a class="hero__link hero__link" href="https://www.jubileesys.com/" target="_blank">Jubilee</a> and Technical Writer 🚀</p>
                            <p class="pb-3">
                                I’m a full-stack developer and co-founder of 
                                <a href="https://play.google.com/store/apps/details?id=com.bensonarafat.geo_football" target="_blank" class="hero__link hero__link--codista">Geo Football</a>.
                                <br class="hero__br"/>
                            </p>
                            <p>
                                I also write about tech on my
                                <a href="https://blog.bensonarafat.com/" target="_blank" class="hero__link">blog</a>, 
                                <a href="https://medium.com/@bensonarafat" target="_blank" class="hero__link">Medium</a> and on
                                <a href="https://twitter.com/bensonarafat" target="_blank" class="hero__link hero__link--twitter">Twitter</a>. 
                            </p>

                            <p class="pt-5">
                                Here are a few technologies I’ve been working with recently:
                            </p>
                            <ul class="skills-list">
                                <li>JavaScript (ES6+)</li>
                                <li>ReactJS</li>
                                <li>VueJs</li>
                                <li>Flutter/Dart</li>
                                <li>PHP/Laravel</li>
                                <li>NodeJs</li>

                            </ul>
                            <p class="pt-5">
                                <a href="https://docs.google.com/document/d/1WMOQ5Z2wl3RR9yjOAPD_hRCBp4OvIQVwgqHz6vtQAyk/edit?usp=share_link" target="_blank" class="hero__link hero__link--codista">Résumé 📑</a>
                            </p>
                        </div>
                    </div>

                    <div class="grow flex-1 image_wrapper hidden sm:block md:block">
                        <img ref="benimage" src="/images/benson_arafat.jpeg" alt="Benson Arafat">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  methods: {
    changeImageBlendMode() {
        // 'width': '35rem',
        let img = this.$refs.benimage;
        img.setAttribute('style', 'mix-blend-mode: none');
    },
    resetImageBlendMode() {
        let img = this.$refs.benimage;
        img.setAttribute('style', 'mix-blend-mode: luminosity');
    }
  },
}
</script>
<style>
 ul.skills-list li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: #ff5277;
    font-size: 13px;
    line-height: 12px;
}
 ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
}
ul.skills-list li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: 13px;
}
.image_wrapper {
    box-shadow: 0 10px 30px -15px #020c1bb3;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: #bcbcbc;
}
.image_wrapper img:hover{
    filter: none;
}
.image_wrapper img {
    position: relative;
    border-radius: 4px;
    filter: grayscale(100%) contrast(1);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}
.image_wrapper::after {
    border: 2px solid #bcbcbc;
    top: 20px;
    left: 20px;
    z-index: -1;
}
.image_wrapper::before, .image_wrapper::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}
.hero__link {
    display: inline-block;
    color: #ffffff !important;
    position: relative;
}
.hero__link:hover::after {
    transform: scaleX(1);
}
.hero__link::before {
    background-color: #2d2d2d;
}
.hero__link::after, .hero__link::before {
    content: '';
    display: block;
    height: 0.5em;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
.hero__link--codista::after {
    background-color: #26ffae;
}
.hero__link::after {
    background-color: #ff5277;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform .3s cubic-bezier(.86,0,.07,1);
}
@media (min-width: 1260px){
    .hero__br {
        display: block;
    }
}
a:focus, a:hover {
    color: #FF527D;
}
</style>