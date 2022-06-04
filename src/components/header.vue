<template>
    <header class="z-50 shadow-md">
      <nav class="border-gray-200 px-2 sm:px-4">
        <div class="container flex flex-wrap justify-between items-center mx-auto p-6">
            <a href="/" class="flex items-center">
              <img src="../assets/image/logo.png" class="mr-3 h-6 sm:h-9" width="40"  alt="Benson Arafat">
            </a>
            <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                      <a href="/#about" class="block py-2 pr-4 pl-3 text-[#ccd6f6]  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#ccd6f6] md:dark:hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
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
                 
                  <li class="mt-5 sm:mt-9 md:mt-0">
                    <a class="px-4 py-2 rounded-md border-2 border-[#64ffda] hover:bg-[#64ffda1a]" download href="https://bensonarafat.com/resume.pdf"><span class="text-[#64ffda]">Resume</span></a>
                  </li>
              </ul>
            </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default{
    name: "AppHeader",
    methods:{
      collapse :  function (){
      }
    }
}
</script>