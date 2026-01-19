import { IconLayoutNavbar } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const headers: ComponentType = {
  slug: 'headers',
  name: 'Headers',
  icon: <IconLayoutNavbar stroke={1.5} />,
  description: 'Responsive navbar for marketing websites',
  variants: [
    {
      id: 'header-simple',
      name: 'Simple header',
      code: `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <nav class="flex items-center justify-between h-16 lg:h-20">
      <div class="shrink-0">
        <a href="#" title="" class="flex text-xl">
          <span class="font-bold">YNTK</span>
          <span class="text-lime-600 dark:text-lime-500">.TS</span>
        </a>
      </div>

      <div class="hidden lg:flex lg:items-center lg:space-x-10">
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Features </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Solutions </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Resources </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Pricing </a>
      </div>

      <div class="hidden lg:flex lg:items-center lg:space-x-10">
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Sign in </a>
        <a href="#" title="" class="px-5 py-2 text-base font-semibold text-white transition-all duration-200 bg-lime-600 rounded-full hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600" role="button"> Try for free </a>
      </div>

      <button type="button" class="inline-flex p-2 text-black dark:text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  </div>
</header>`,
      contributor: 'rayasabari',
    },
    {
      id: 'header-left',
      name: 'Left Links',
      code: `<header class="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <nav class="flex h-16 items-center justify-between lg:h-20">
      <div class="flex items-center gap-10">
        <div class="shrink-0">
          <a href="#" title="" class="flex items-center text-xl">
            <span class="font-bold dark:text-white">Go</span>
            <span class="dark:text-white">Wrong</span>
            <span class="ml-1 rounded-lg border-2 border-lime-600 px-1 text-base font-medium text-lime-600 dark:border-lime-500 dark:text-lime-500">2.0</span>
          </a>
        </div>

        <div class="mx-auto hidden lg:flex lg:items-center lg:space-x-10">
          <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-lime-600 focus:text-lime-600 dark:text-white dark:hover:text-lime-500 dark:focus:text-lime-500"> Features </a>
          <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-lime-600 focus:text-lime-600 dark:text-white dark:hover:text-lime-500 dark:focus:text-lime-500"> Solutions </a>
          <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-lime-600 focus:text-lime-600 dark:text-white dark:hover:text-lime-500 dark:focus:text-lime-500"> Resources </a>
          <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-lime-600 focus:text-lime-600 dark:text-white dark:hover:text-lime-500 dark:focus:text-lime-500"> Pricing </a>
        </div>
      </div>

      <div class="hidden lg:flex lg:items-center lg:space-x-4">
        <a href="#" title="" class="rounded-full border border-black bg-transparent px-4 py-2 text-base font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-white" role="button"> Login </a>
        <a href="#" title="" class="rounded-full border border-transparent bg-black px-4 py-2 text-base font-semibold text-white transition-all duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:focus:ring-white" role="button"> Sign up </a>
      </div>

      <button type="button" class="inline-flex rounded-md p-2 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden dark:text-white dark:hover:bg-gray-800 dark:focus:bg-gray-800">
        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  </div>
</header>`,
      contributor: 'rayasabari',
    },
    {
      id: 'header-search',
      name: 'With Search',
      code: `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <nav class="flex items-center justify-between h-16 lg:h-20">
      <div class="shrink-0">
        <a href="#" title="" class="flex text-xl tracking-wider gap-1 items-center">
          <svg class="size-7 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-picnic-table"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 7l2 9m-10 -9l-2 9m-1 -9h14m2 5h-18" /></svg>
          <span class="font-semibold">Kay</span>
          <span class="text-lime-600 dark:text-lime-500">UI</span>
        </a>
      </div>

      <div class="flex-1 hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 lg:px-12">
        <div class="w-full max-w-lg">
          <label for="search" class="sr-only"> Search </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" name="search" id="search" class="block w-full py-2 pl-10 pr-3 text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 sm:text-sm" placeholder="Search web..." />
          </div>
        </div>
      </div>

      <div class="hidden lg:flex lg:items-center lg:space-x-10">
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Application </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Marketing </a>
        
        <a href="#" title="" class="flex items-center justify-center w-10 h-10 text-white bg-black dark:bg-lime-600 rounded-full hover:bg-gray-800 dark:hover:bg-lime-700 transition-all duration-200">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
            </svg>
        </a>
      </div>

      <button type="button" class="inline-flex p-2 text-black dark:text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  </div>
</header>`,
      contributor: 'rayasabari',
    },
    {
      id: 'header-sticky',
      name: 'Sticky Header',
      code: `<header class="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <nav class="flex items-center justify-between h-16 lg:h-20">
      <div class="shrink-0">
        <a href="#" title="" class="flex group">
          <span class="text-xl font-bold tracking-widest text-gray-900 dark:text-white uppercase group-hover:text-lime-600 group-hover:dark:text-lime-400 transition-colors">EX<span class="text-lime-600 dark:text-lime-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">MK</span></span>
        </a>
      </div>

      <div class="hidden lg:flex lg:items-center lg:space-x-10">
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Collections </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> New Arrivals </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Accessories </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Sale </a>
      </div>

      <div class="hidden lg:flex lg:items-center lg:space-x-6">
        <button type="button" class="text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
        <button type="button" class="text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </button>
      </div>

      <button type="button" class="inline-flex p-2 text-black dark:text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  </div>
</header>`,
      contributor: 'rayasabari',
    },
    {
      id: 'header-topbar',
      name: 'With Topbar',
      code: `<div>
  <div class="bg-gray-900 border-b border-gray-800">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-10">
        <p class="text-xs font-medium text-white"> FREE SHIPPING ON ALL ORDERS OVER $100 </p>
        <div class="flex items-center space-x-6">
            <a href="#" class="text-xs font-medium text-white hover:text-lime-400 transition-colors"> Support </a>
            <a href="#" class="text-xs font-medium text-white hover:text-lime-400 transition-colors"> Track Order </a>
        </div>
      </div>
    </div>
  </div>

  <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16 lg:h-20">
        <div class="shrink-0">
          <a href="#" title="" class="flex items-center text-xl font-medium tracking-wider">
            <svg class="size-8 text-lime-600 dark:text-lime-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 13v-6l-5 4l-5 -4v6l5 4l5 -4" /></svg>
            <span class="font-thin">LOW</span>
            <span class="font-bold">HOOD</span>
          </a>
        </div>

        <div class="hidden lg:flex lg:items-center lg:space-x-10">
          <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Products </a>
          <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Services </a>
          <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Pricing </a>
          <a href="#" title="" class="text-base font-medium text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-500 transition-all duration-200 focus:text-lime-600 dark:focus:text-lime-500"> Contact </a>
        </div>

        <div class="hidden lg:flex lg:items-center lg:space-x-10">
          <a href="#" title="" class="px-5 py-2 text-base font-semibold text-black dark:text-white transition-all duration-200 bg-transparent border border-black dark:border-white rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white" role="button"> Contact Sales </a>
        </div>
        
        <button type="button" class="inline-flex p-2 text-black dark:text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
      </nav>
    </div>
  </header>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'header-modern-alternate',
      name: 'Modern Alternate',
      code: `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 glass backdrop-blur-md">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <nav class="flex items-center justify-between h-16 lg:h-20">
      <div class="shrink-0">
        <a href="#" title="" class="flex items-center gap-1 text-xl">
          <svg class="size-6 text-lime-500 dark:text-lime-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-terminal-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9l3 3l-3 3" /><path d="M13 15l3 0" /><path d="M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12" /></svg>
          <span class="font-semibold">Terminal</span>
          <span class="font-light">Ultimate</span>
        </a>
      </div>

      <div class="hidden lg:flex lg:items-center lg:space-x-10">
        <a href="#" title="" class="text-base font-medium text-black dark:text-gray-300 hover:text-lime-600 dark:hover:text-white transition-all duration-200"> Platform </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-gray-300 hover:text-lime-600 dark:hover:text-white transition-all duration-200"> Solutions </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-gray-300 hover:text-lime-600 dark:hover:text-white transition-all duration-200"> Developers </a>
        <a href="#" title="" class="text-base font-medium text-black dark:text-gray-300 hover:text-lime-600 dark:hover:text-white transition-all duration-200"> Pricing </a>
      </div>

      <div class="hidden lg:flex lg:items-center lg:space-x-10">
        <a href="#" title="" class="text-base font-medium text-black dark:text-gray-300 hover:text-lime-600 dark:hover:text-white transition-all duration-200"> Log in </a>
        <a href="#" title="" class="px-5 py-2 text-base font-semibold text-white dark:text-black transition-all duration-200 bg-lime-600 dark:bg-white rounded-full hover:bg-lime-700 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600 dark:focus:ring-white" role="button"> Get Started </a>
      </div>

      <button type="button" class="inline-flex p-2 text-black dark:text-gray-400 transition-all duration-200 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white">
        <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  </div>
</header>`,
      contributor: 'rayasabari',
    },
  ],
};