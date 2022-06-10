<template>
  <section id="about" class="aboutContent pt-24 sm:pt-24">
    <h2 class="numbered-heading">About Me</h2>
    <div class="grid grid-cols-1 gap-5 md:grid-flow-col md:gap-5">
      <div class="about-content">
        <p>
          Hello! My name is Ben and I enjoy creating things that live on the
          internet. My interest in web development started back in 2015 when I
          designed my first website using my tablet — turns out a
          <span style="color: aquamarine">Hello World</span> taught me a lot
          about HTML & CSS!
        </p>

        <p>Here are a few technologies I've been working with recently:</p>

        <h6 class="skills-heading">Web</h6>
        <div class="grid grid-cols-4 gap-4" style="text-align: -webkit-center">
              <div>
                <img src="../assets/icons/stack/php.svg" alt="" width="50" />
                  <div class="mt-1.5"><span class="text-sm md:text-base">PHP</span></div>
              </div>

              <div>
                <img
                  src="../assets/icons/stack/laravel.svg"
                  alt=""
                  width="50"
                />
              <div class="mt-1.5"><span class="text-sm md:text-base">Laravel</span></div>
            </div>

            <div>
                <img
                  src="../assets/icons/stack/bootstrap.svg"
                  alt=""
                  width="50"
                />
              <div class="mt-1.5"><span class="text-sm md:text-base">Bootstrap</span></div>
          </div>

          <div>
            <img src="../assets/icons/stack/css3.svg" alt="" width="50" />
              <div class="mt-1.5"> <span class="text-sm md:text-base">CSS</span></div>
          </div>

           <div>
                <img
                  src="../assets/icons/stack/tailwind.svg"
                  alt=""
                  width="50"
                />
              <div class="mt-1.5"><span class="text-sm md:text-base">Tailwind</span></div>
          </div>

            <div>
                <img src="../assets/icons/stack/vue.svg" alt="" width="50" />
              <div><span class="text-sm md:text-base">Vue</span></div>
          </div>


          <div>
                <img src="../assets/icons/stack/html.svg" alt="" width="50" />
              <div class="mt-1.5"><span class="text-sm md:text-base">HTML</span></div>
          </div>



          <div>
                <img
                  src="../assets/icons/stack/javascript.svg"
                  alt=""
                  width="50"
                />
              <div class="mt-1.5"><span class="text-sm md:text-base">Javascript</span></div>
          </div>


        </div>
      
        <h6 class="skills-heading">Mobile</h6>
        <div class="grid grid-cols-4 gap-4" style="text-align: -webkit-center">
          <div>
                <img
                  src="../assets/icons/stack/android.svg"
                  alt=""
                  width="50"
                />
              <div class="mt-1.5"><span class="text-sm md:text-base">Android Studio</span></div>
          </div>

          <div>
                <img src="../assets/icons/stack/dart.svg" alt="" width="50" />
              <div class="mt-1.5"><span class="text-sm md:text-base">Dart</span></div>
          </div>

          <div>
                <img
                  src="../assets/icons/stack/flutter.svg"
                  alt=""
                  width="50"
                />
              <div class="mt-1.5"><span class="text-sm md:text-base">Flutter</span></div>
          </div>

        </div>
        <h6 class="skills-heading">Database</h6>
        <div class="grid grid-cols-4 gap-4" style="text-align: -webkit-center">
          <div>
                <img src="../assets/icons/stack/mysql.svg" alt="" width="50" />
              <div class="mt-1.5"><span class="text-sm md:text-base">MySQL</span></div>
          </div>

          <div>
                <img
                  src="../assets/icons/stack/postgresql.svg"
                  alt=""
                  width="50"
                />
              <div class="mt-1.5"><span class="text-sm md:text-base">PostgreSQL</span></div>
          </div>
        </div>

        <h6 class="skills-heading">Tools</h6>
        <div class="grid grid-cols-5 gap-4" style="text-align: -webkit-center">
          <div>
              <img src="../assets/icons/stack/api.svg" alt="" width="50" />
              <div class="mt-1.5"><span class="text-sm md:text-base">REST API</span></div>
          </div>
          <div>
                <img src="../assets/icons/stack/git.svg" alt="" width="50" />
              <div class="mt-1.5"><span class="text-sm md:text-base">Git</span></div>
          </div>
        </div>
      </div>

      <div class="avatar-content">
        <div class="wrapper">
            <img
              src="../assets/image/ben.jpg"
              alt="Benson Arafat"
              width="300" 
              height="300"
            />
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.avatar-content {
    position: relative;
    max-width: 300px;
    justify-self: center;
}
.avatar-content .wrapper {
    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: #64ffda;
}
.avatar-content .wrapper img:hover{
    mix-blend-mode: normal;
    filter: none;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}


.avatar-content .wrapper img{
    position: relative;
    border-radius: 4px;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    overflow: hidden;
    z-index: 1;
}

.avatar-content .wrapper::after {
    border: 2px solid #64ffda;
    top: 20px;
    left: 20px;
}
.avatar-content .wrapper::before {
    top: 0px;
    left: 0px;
    background-color: #0a192f;
    mix-blend-mode: screen;
}

.avatar-content .wrapper::before, .avatar-content .wrapper::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}

.skills-heading {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 20px;
  width: 100%;
  font-family: "SFMono";
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

.about-content ul.skills-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
}

.avatar-content {
  position: relative;
  max-width: 200px;
}

.avatar-content .wrapper {
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: block;
  position: relative;
  width: 100%;
  border-radius: 4px;
  background-color: #64ffda;
}

.avatar-content .wrapper::before {
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
export default {
  name: "AboutPage",
};
</script>