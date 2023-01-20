<template>
    <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        <div class="max-w-8xl mx-auto">
            <div class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                <div class="relative flex items-center">
                    <a href="" class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto flex items-center font-bold">
                        <img src="/images/logo.png" alt="Ben" :style="{'width':'50px', 'height': '50px', 'margin-right': '0.5rem'}">
                        <span class="header__name">
                            <span>
                                Benson Arafat
                            </span>
                            <span class="header__verification" :style="{'padding-left': '0.25em'}">
                                <img src="/images/header__verification.png" :style="{'width': '25px'}"/>
                            </span>
                            <span class="header__official" aria-hidden="true">
                                <img src="/images/official.png" :style="{'width': '20px','margin-right': '0.25em'}"/>
                                Official
                            </span>
                        </span>
                    </a>
                    <div class="relative lg:flex items-center ml-auto">
                        <nav class="text-sm leading-6 font-semibold text-white dark:text-white">
                            <ul class="flex space-x-8">
                                <li>
                                    <a class="hover:text-[#ff5277] dark:hover:text-[#ff5277]" href="/#about">About</a>
                                </li>
                                <li>
                                    <a class="hover:text-[#ff5277] dark:hover:text-[#ff5277]" href="/#experience">Experience</a>
                                </li>
                                <li>
                                    <a class="hover:text-[#ff5277] dark:hover:text-[#ff5277]" href="/#project">Projects</a>
                                </li>
                                <li>
                                    <a class="hover:text-[#ff5277] dark:hover:text-[#ff5277]" href="https://blog.bensonarafat.com/" target="black">Blog</a>
                                </li>
                                <li>
                                    <a class="hover:text-[#ff5277] dark:hover:text-[#ff5277]" href="/#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                            <label class="sr-only" id="headlessui-listbox-label-3" data-headlessui-state="">Theme</label>
                            <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <span class="hidden dark:hidden">
                                            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                                                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="stroke-slate-400 dark:stroke-slate-500"></path>
                                                <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-slate-400 dark:stroke-slate-500"></path>
                                            </svg>
                                        </span>
                                        <span class="dark:inline text-sky-400">
                                            <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 text-sky-400">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" class="fill-transparent"></path>
                                                <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-slate-400 dark:fill-slate-500"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-slate-400 dark:fill-slate-500"></path>
                                            </svg>
                                        </span>
                                    </MenuButton>
                                </div>

                                <transition
                                    enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                                    <MenuItems class="absolute z-50 top-full right-0 rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold bg-slate-800 ring-0 highlight-white/5 text-slate-300 mt-8">
                                        <div class="px-1 py-1">
                                            <MenuItem v-slot="{ active }">
                                            <button
                                                :class="[
                                                active ? 'bg-slate-800 text-[#ff5277]' : 'text-white',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                ]"
                                            >
                                                <span :style="{'margin-right': '0.5rem'}">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                                                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="stroke-slate-400 stroke-slate-500"></path>
                                                        <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-slate-400 stroke-slate-500"></path>
                                                    </svg>
                                                </span>
                                                Light
                                            </button>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <button
                                                :class="[
                                                active ? 'bg-slate-800 text-[#ff5277]' : 'text-white',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                ]"
                                            >
                                                <span :style="{'margin-right': '0.5rem'}">
                                                    <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" class="fill-transparent"></path>
                                                        <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-slate-400 fill-slate-500"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-slate-400 fill-slate-500"></path>
                                                    </svg>
                                                </span>
                                                Dark
                                            </button>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                                <button
                                                    :class="[
                                                    active ? 'bg-slate-800 text-[#ff5277]' : 'text-white',
                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                    ]"
                                                >
                                                    <span :style="{'margin-right': '0.5rem'}">
                                                        <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" stroke-width="2" stroke-linejoin="round" class="stroke-slate-400 stroke-slate-500"></path><path d="M14 15c0 3 2 5 2 5H8s2-2 2-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-slate-400 stroke-slate-500"></path></svg>
                                                    </span>
                                                    System
                                                </button>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>

                            <a href="https://github.com/bensonarafat" target="_blank" class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                                <span class="sr-only">Benson Arafat on GitHub</span>
                                <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <button type="button" class="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300">
                        <span class="sr-only">Search</span>
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="m19 19-3.5-3.5"></path>
                            <circle cx="11" cy="11" r="6"></circle>
                        </svg>
                    </button>
                    <div class="ml-2 -my-1 lg:hidden">
                        <button type="button" class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                            <span class="sr-only">Navigation</span>
                            <svg width="24" height="24" fill="none" aria-hidden="true">
                                <path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div :style="{'position':'fixed','top':'1px','left':'1px','width':'1px','height':'0','padding':'0','margin':'-1px','overflow':'hidden','clip':'rect(0, 0, 0, 0)','white-space':'nowrap','border-width':'0','display':'none'}"></div>
                    </div>
                </div>

            </div>
        
        </div>
    </div>
</template>
<script setup>
    import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>