<template>
    <div class="container mx-auto px-40 md:p-4">
        <HomePage/>
        <AboutPage/>
        <ExperiencePage/> 
        <ProjectsPage/>
        <ContactPage/>
    </div>
</template>

<script>
import HomePage from './home';
import AboutPage from './about'; 
import ExperiencePage from './experience'; 
import ContactPage from './contact';
import ProjectsPage from './projects';
export default {
    name: "mainPage",
    components: {
      HomePage, 
      AboutPage,
      ExperiencePage,
      ContactPage, 
      ProjectsPage
  }
}
</script>