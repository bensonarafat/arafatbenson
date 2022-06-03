<template>
  <section id="about" class="aboutContent">
    <h2 class="numbered-heading">About Me</h2>
    <div class="inner">
      <div class="kNIdQM">
        <p class="text-justify">
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
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img src="../assets/icons/stack/php.svg" alt="" width="50" />
              </div>
              <div><span>PHP</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img
                  src="../assets/icons/stack/laravel.svg"
                  alt=""
                  width="50"
                />
              </div>
              <div><span>Laravel</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img
                  src="../assets/icons/stack/bootstrap.svg"
                  alt=""
                  width="50"
                />
              </div>
              <div><span>Bootstrap</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img src="../assets/icons/stack/css3.svg" alt="" width="50" />
              </div>
              <div><span>CSS</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img
                  src="../assets/icons/stack/tailwind.svg"
                  alt=""
                  width="50"
                />
              </div>
              <div><span>Tailwind</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img src="../assets/icons/stack/vue.svg" alt="" width="50" />
              </div>
              <div><span>Vue</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img src="../assets/icons/stack/html.svg" alt="" width="50" />
              </div>
              <div><span>HTML</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img
                  src="../assets/icons/stack/javascript.svg"
                  alt=""
                  width="50"
                />
              </div>
              <div><span>Javascript</span></div>
            </div>
          </div>
        </div>
        <h6 class="skills-heading">Mobile</h6>
        <div class="grid grid-cols-4 gap-4" style="text-align: -webkit-center">
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img
                  src="../assets/icons/stack/android.svg"
                  alt=""
                  width="50"
                />
              </div>
              <div><span>Android Studio</span></div>
            </div>
          </div>

          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img src="../assets/icons/stack/dart.svg" alt="" width="50" />
              </div>
              <div><span>Dart</span></div>
            </div>
          </div>

          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img
                  src="../assets/icons/stack/flutter.svg"
                  alt=""
                  width="50"
                />
              </div>
              <div><span>Flutter</span></div>
            </div>
          </div>
        </div>
        <h6 class="skills-heading">Database</h6>
        <div class="grid grid-cols-4 gap-4" style="text-align: -webkit-center">
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img src="../assets/icons/stack/mysql.svg" alt="" width="50" />
              </div>
              <div><span>MySQL</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img
                  src="../assets/icons/stack/postgresql.svg"
                  alt=""
                  width="50"
                />
              </div>
              <div><span>PostgreSQL</span></div>
            </div>
          </div>
        </div>

        <h6 class="skills-heading">Tools</h6>
        <div class="grid grid-cols-5 gap-4" style="text-align: -webkit-center">
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img src="../assets/icons/stack/api.svg" alt="" width="50" />
              </div>
            </div>
            <div><span>REST API</span></div>
          </div>
          <div>
            <div class="grid grid-rows-2 grid-flow-col gap-2">
              <div>
                <img src="../assets/icons/stack/git.svg" alt="" width="50" />
              </div>
              <div><span>Git</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="iTdkQf">
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
.iTdkQf .wrapper img:hover{
    mix-blend-mode: normal;
    filter: none;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}


.iTdkQf .wrapper img{
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

.iTdkQf .wrapper::after {
    border: 2px solid #64ffda;
    top: 20px;
    left: 20px;
}
.iTdkQf .wrapper::before {
    top: 0px;
    left: 0px;
    background-color: #0a192f;
    mix-blend-mode: screen;
}

.iTdkQf .wrapper::before, .iTdkQf .wrapper::after {
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
  margin: 40px 0px 20px;
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
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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
export default {
  name: "AboutPage",
};
</script>