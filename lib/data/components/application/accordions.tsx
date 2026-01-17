import { IconLayoutList } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const accordions: ComponentType = {
    slug: 'accordions',
    name: 'Accordions',
    icon: <IconLayoutList stroke={1.5} />,
    description: 'Vertically stacked sections that expand to show content.',
    variants: [
        {
            id: 'simple-accordion',
            name: 'Simple Accordion',
            code: `<div class="w-full max-w-lg mx-auto space-y-4">
  <!-- Item 1 -->
  <details class="group border-b border-neutral-200 dark:border-neutral-800 pb-1">
    <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-neutral-900 dark:text-neutral-100 group-open:text-lime-600 dark:group-open:text-lime-400 transition-colors">
      Simple Accordion
      <span class="transition-transform duration-300 group-open:rotate-180">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </summary>
    <div class="pb-4 pt-2 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
      The accordion uses the native HTML details and summary elements. It works without any JavaScript, making it lightweight and accessible by default.
    </div>
  </details>

  <!-- Item 2 -->
  <details class="group border-b border-neutral-200 dark:border-neutral-800 pb-1">
    <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-neutral-900 dark:text-neutral-100 group-open:text-lime-600 dark:group-open:text-lime-400 transition-colors">
      Bordered Accordion
      <span class="transition-transform duration-300 group-open:rotate-180">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </summary>
    <div class="pb-4 pt-2 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
      Absolutely! Since it uses standard Tailwind utilities, you can change colors, spacing, typography, and animations to match your brand's design system completely.
    </div>
  </details>

  <!-- Item 3 -->
  <details class="group border-b border-neutral-200 dark:border-neutral-800 pb-1">
    <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-neutral-900 dark:text-neutral-100 group-open:text-lime-600 dark:group-open:text-lime-400 transition-colors">
      Split Accordion
      <span class="transition-transform duration-300 group-open:rotate-180">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </summary>
    <div class="pb-4 pt-2 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
      Yes, the details and summary elements are semantically correct and accessible to screen readers out of the box. Keyboard navigation is also supported natively.
    </div>
  </details>
</div>`,
        },
        {
            id: 'bordered-accordion',
            name: 'Bordered Accordion',
            code: `<div class="w-full max-w-lg mx-auto overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800">
  
  <details class="group bg-white dark:bg-neutral-900 p-0">
    <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-neutral-900 dark:text-neutral-100 group-open:bg-neutral-50 dark:group-open:bg-neutral-800 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800">
      <span>Connected Account</span>
      <span class="ml-2 transition-transform duration-300 group-open:rotate-180">
        <svg class="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </summary>
    <div class="border-t border-neutral-200 dark:border-neutral-700 p-4 text-sm text-neutral-600 dark:text-neutral-400">
      Manage your connected bank accounts and credit cards here. You can add or remove accounts at any time.
    </div>
  </details>

  <details class="group bg-white dark:bg-neutral-900 p-0">
    <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-neutral-900 dark:text-neutral-100 group-open:bg-neutral-50 dark:group-open:bg-neutral-800 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800">
      <span>Privacy Settings</span>
      <span class="ml-2 transition-transform duration-300 group-open:rotate-180">
        <svg class="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </summary>
    <div class="border-t border-neutral-200 dark:border-neutral-700 p-4 text-sm text-neutral-600 dark:text-neutral-400">
      Control who can see your profile and activity. We value your privacy and give you full control over your data sharing preferences.
    </div>
  </details>

  <details class="group bg-white dark:bg-neutral-900 p-0">
    <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-neutral-900 dark:text-neutral-100 group-open:bg-neutral-50 dark:group-open:bg-neutral-800 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800">
      <span>Notifications</span>
      <span class="ml-2 transition-transform duration-300 group-open:rotate-180">
        <svg class="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </summary>
    <div class="border-t border-neutral-200 dark:border-neutral-700 p-4 text-sm text-neutral-600 dark:text-neutral-400">
      Choose which notifications you want to receive. You can get updates via email, push notifications, or SMS.
    </div>
  </details>
</div>`,
        },
        {
            id: 'split-accordion',
            name: 'Split Accordion',
            code: `<div class="w-full max-w-lg mx-auto space-y-3">
  
  <details class="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-neutral-900 dark:text-neutral-100 bg-neutral-50/50 dark:bg-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
      <span>Personal Info</span>
      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-700 group-open:bg-lime-500 group-open:text-white transition-colors duration-200 shadow-sm border border-neutral-100 dark:border-neutral-600">
        <svg class="h-4 w-4 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </summary>
    <div class="p-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800">
      Update your photo and personal details here. Your public profile will show this information.
    </div>
  </details>

  <details class="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <summary class="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-neutral-900 dark:text-neutral-100 bg-neutral-50/50 dark:bg-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
      <span>Billing Address</span>
      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-700 group-open:bg-lime-500 group-open:text-white transition-colors duration-200 shadow-sm border border-neutral-100 dark:border-neutral-600">
        <svg class="h-4 w-4 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </summary>
    <div class="p-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800">
      Edit your billing address and shipping preferences. This will be used for your next invoice or delivery.
    </div>
  </details>

</div>`,
        }
    ]
};
