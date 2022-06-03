<template>
    <header class="z-50 shadow-md">
      <nav class="border-gray-200 px-2 sm:px-4">
        <div class="container flex flex-wrap justify-between items-center mx-auto p-6">
          <a href="/" class="flex">
            <img src="../assets/image/logo.png" alt="Logo" width="40" class="mr-4 logo">
          </a>
          <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
              <li>
                <a href="/#about" class="block py-2 pr-4 pl-3 text-[#ccd6f6] bg-[#ccd6f6] rounded md:bg-transparent md:text-[#ccd6f6] md:p-0 dark:text-[#ccd6f6] md:dark:hover:text-[#64ffda]">About</a>
              </li>
              <li>
                <a href="/#experience" class="block py-2 pr-4 pl-3 text-[#ccd6f6]  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#ccd6f6] md:dark:hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Experience</a>
              </li>
              <li>
                <a href="/#projects" class="block py-2 pr-4 pl-3 text-[#ccd6f6] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#ccd6f6] md:dark:hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
              </li>
              <li>
                <a href="/#contact" class="block py-2 pr-4 pl-3 text-[#ccd6f6] border-b border-[#64ffda] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#ccd6f6] md:dark:hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-[#64ffda] md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
              <li>
                <button id="theme-toggle" type="button" class="text-[#ccd6f6] dark:text-[#ccd6f6] dark:hover:text-[#ccd6f6] hover:bg-[#64ffda1a] dark:hover:bg-[#64ffda1a] focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                  <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                  <svg id="theme-toggle-light-icon" class=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </button>
              </li>
              <li>
                  <a class="px-4 py-2 rounded-md border-2 border-[#64ffda] hover:bg-[#64ffda1a]" download href="../assets/resume.pdf"><span class="text-[#64ffda]">Resume</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
// import anime from 'animejs';
export default{
    name: "AppHeader",
    mounted (){
      //   anime({
      //     targets: '.logo, ul li',
      //     translateY: [0,20],
      //     opacity: [0, 1],
      //     easing: "linear",
      //     duration: 1000,
      // });
    },
}
</script>