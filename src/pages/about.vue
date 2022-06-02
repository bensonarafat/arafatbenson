<template>
    <section class="aboutContent">
        <h2 class="numbered-heading">About Me</h2>
        <div class="inner">
            <div class="kNIdQM">
                <p>Hello! My name is Ben and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I designed my first website using my tablet — turns out a <span style="color:aquamarine;">Hello World</span> taught me a lot about HTML & CSS!</p>
                
                <p>Here are a few technologies I've been working with recently:</p>

                <h6 class="skills-heading">Web</h6>
                <div class="grid grid-cols-4 gap-2" style="text-align: -webkit-center;">
                    <div>
                        <img src="../assets/icons/stack/php.svg" alt="" width="50">
                        <span>PHP</span>
                    </div>
                    <div>
                        <img src="../assets/icons/stack/laravel.svg" alt="" width="50">
                        <span>Laravel</span>
                    </div>
                    <div>
                        <img src="../assets/icons/stack/bootstrap.svg" alt="" width="50">
                        <span>Bootstrap</span>
                    </div>
                    <div>
                        <img src="../assets/icons/stack/css3.svg" alt="" width="50">
                        <span>CSS</span>
                    </div>
                    <div>
                        <img src="../assets/icons/stack/tailwind.svg" alt="" width="50">
                        <span>Tailwind</span>
                    </div>
                    <div>
                        <img src="../assets/icons/stack/vue.svg" alt="" width="50">
                        <span>Vue</span>
                    </div>
                    <div>
                        <img src="../assets/icons/stack/html.svg" alt="" width="50">
                        <span>HTML</span>
                    </div>
                    <div>
                        <img src="../assets/icons/stack/javascript.svg" alt="" width="50">
                        <span>Javascript</span>
                    </div>
                </div>
                <h6 class="skills-heading">Mobile</h6>
                  <div class="grid grid-cols-4 gap-2" style="text-align: -webkit-center;">
                    <div>
                            <img src="../assets/icons/stack/android.svg" alt="" width="50">
                        <span>Android Studio</span>
                    </div>
                    
                    <div>
                        <img src="../assets/icons/stack/dart.svg" alt="" width="50">
                        <span>Dart</span>
                    </div>

                    <div>
                        <img src="../assets/icons/stack/flutter.svg" alt="" width="50">
                        <span>Flutter</span>
                    </div>
                  </div>
                <h6 class="skills-heading">Database</h6>
                 <div class="grid grid-cols-4 gap-2" style="text-align: -webkit-center;">
                    <div>
                        <img src="../assets/icons/stack/mysql.svg" alt="" width="50">
                        <span>MySQL</span>
                    </div>
                    <div>
                        <img src="../assets/icons/stack/postgresql.svg" alt="" width="50">
                        <span>PostgreSQL</span>
                    </div>
                 </div>

                <h6 class="skills-heading">Tools</h6>
                <div class="grid grid-cols-5 gap-2" style="text-align: -webkit-center;">

                    <div>
                        <img src="../assets/icons/stack/api.svg" alt="" width="50">
                        <span>REST API</span>
                    </div>
                    <div>
                        <img src="../assets/icons/stack/git.svg" alt="" width="50">
                        <span>Git</span>
                    </div>


                </div>
            </div>


            <div class="iTdkQf">
                <div class="wrapper">
                    <img src="../assets/image/ben.png" alt="Benson Arafat" width="500" style="border-radius:4px;">
                </div>
            </div>
        </div>

    </section>
</template>


<style>


.skills-heading{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 40px 0px 20px;
    width: 100%;
    font-family: 'SFMono';
    font-size: 18px;
    white-space: nowrap;
    color: #64ffda;
    font-weight: 400;
}

.skills-heading::after {
    content: "";
    display: block;
    position: relative;
    width: 100%;
    height: 1px;
    margin-left: 20px;
    background-color: #233554;
}

.aboutContent {
    max-width: 900px;
}

.inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
}

.kNIdQM ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
}

.iTdkQf {
    position: relative;
    max-width: 300px;
}

.iTdkQf .wrapper {
    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: #64ffda;
}

.iTdkQf .wrapper::before {
    top: 0px;
    left: 0px;
    background-color: #0a192f;
    mix-blend-mode: screen;
}

p {
    margin: 0px 0px 15px !important;
}
</style>
<script>
export default{
    name: "AboutPage"
}
</script>