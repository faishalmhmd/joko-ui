import { IconChevronsRight } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const breadcrumbs: ComponentType = {
  slug: 'breadcrumbs',
  name: 'Breadcrumbs',
  icon: <IconChevronsRight stroke={1.5} />,
  description: 'Breadcrumbs help users understand their current location within a hierarchy.',
  variants: [
    {
      id: 'simple',
      name: 'Simple Breadcrumb',
      code: `<nav aria-label="Breadcrumb" class="flex">
  <ol class="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-200">
    <li class="flex items-center">
      <a
        href="#"
        class="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900 dark:bg-gray-800 dark:hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>

        <span class="ms-1.5 text-xs font-medium"> Home </span>
      </a>
    </li>

    <li class="relative flex items-center">
      <span
        class="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 clip-path-[polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 dark:bg-gray-800"
      >
      </span>

      <a
        href="#"
        class="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900 dark:bg-gray-900 dark:hover:text-white"
      >
        Shirts
      </a>
    </li>

    <li class="relative flex items-center">
      <span
        class="absolute inset-y-0 -start-px h-10 w-4 bg-white clip-path-[polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 dark:bg-gray-900"
      >
      </span>

      <a
        href="#"
        class="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900 dark:bg-gray-900 dark:hover:text-white"
      >
        Plain Tee
      </a>
    </li>
  </ol>
</nav>`,
      contributor: "rayasabari",
    },
    {
      id: 'chevron',
      name: 'Chevron Breadcrumb',
      code: `<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
    <li>
      <a href="#" class="block transition hover:text-gray-700 dark:hover:text-gray-100">
        <span class="sr-only"> Home </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" class="block transition hover:text-gray-700 dark:hover:text-gray-100"> Shirts </a>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" class="block transition hover:text-gray-700 dark:hover:text-gray-100"> Plain Tee </a>
    </li>
  </ol>
</nav>`,
      contributor: "rayasabari",
    },
    {
      id: 'slash',
      name: 'Slash Breadcrumb',
      code: `<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
    <li>
      <a href="#" class="block transition hover:text-gray-700 dark:hover:text-gray-100">
        <span class="sr-only"> Home </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>

    <li class="rtl:rotate-180">
      <span class="text-gray-400 dark:text-gray-500">/</span>
    </li>

    <li>
      <a href="#" class="block transition hover:text-gray-700 dark:hover:text-gray-100"> Shirts </a>
    </li>

    <li class="rtl:rotate-180">
      <span class="text-gray-400 dark:text-gray-500">/</span>
    </li>

    <li>
      <a href="#" class="block transition hover:text-gray-700 dark:hover:text-gray-100"> Plain Tee </a>
    </li>
  </ol>
</nav>`,
      contributor: "rayasabari",
    },
    {
      id: 'with-icons',
      name: 'Breadcrumb with Icons',
      code: `<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
    <li>
      <a href="#" class="flex items-center gap-2 transition hover:text-gray-700 dark:hover:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span>Home</span>
      </a>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" class="flex items-center gap-2 transition hover:text-gray-700 dark:hover:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span>Products</span>
      </a>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" class="flex items-center gap-2 transition hover:text-gray-700 dark:hover:text-gray-200">
        <span class="block px-2 py-1 text-xs rounded-full bg-lime-100 text-lime-700 dark:bg-lime-900/50 dark:text-lime-300">
           New
        </span>
        <span>Shirts</span>
      </a>
    </li>
  </ol>
</nav>`,
      contributor: "rayasabari",
    },
    {
      id: 'collapsed',
      name: 'Collapsed Breadcrumb',
      code: `<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
    <li>
      <a href="#" class="block transition hover:text-gray-700 dark:hover:text-gray-100"> Home </a>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </li>

    <li>
      <div class="relative group">
        <button
          class="flex items-center justify-center p-1 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition"
        >
          <span class="sr-only">More</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
        
        <!-- Dropdown (Simplified for demo, usually requires JS/Alpine) -->
        <div class="absolute left-1/2 top-full z-10 hidden -translate-x-1/2 mt-2 w-48 rounded-md border border-gray-100 bg-white p-2 shadow-lg group-hover:block dark:border-gray-800 dark:bg-gray-900">
          <a
            href="#"
            class="block rounded-md px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Category A
          </a>
           <a
            href="#"
            class="block rounded-md px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Category B
          </a>
        </div>
      </div>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" class="block transition hover:text-gray-700 dark:hover:text-gray-100"> Plain Tee </a>
    </li>
  </ol>
</nav>`,
      contributor: "rayasabari",
    },
    {
      id: 'background',
      name: 'Background Breadcrumb',
      code: `<nav aria-label="Breadcrumb">
  <ol
    class="flex items-center gap-1 rounded-md bg-white p-2 shadow-sm dark:bg-gray-900 dark:shadow-gray-800 text-sm text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-800"
  >
    <li>
      <a
        href="#"
        class="block rounded-md px-2 py-1.5 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-100"
      >
        <span class="sr-only"> Home </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>

    <li class="rtl:rotate-180">
      <span class="text-gray-300 dark:text-gray-600">/</span>
    </li>

    <li>
      <a
        href="#"
        class="block rounded-md px-2 py-1.5 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-100"
      >
        Shirts
      </a>
    </li>

    <li class="rtl:rotate-180">
      <span class="text-gray-300 dark:text-gray-600">/</span>
    </li>

    <li>
      <a
        href="#"
        class="block rounded-md px-2 py-1.5 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-100"
      >
        Plain Tee
      </a>
    </li>
  </ol>
</nav>`,
    },
  ],
};
