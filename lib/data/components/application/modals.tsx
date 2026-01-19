import { IconAppWindow } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const modals: ComponentType = {
  slug: 'modals',
  name: 'Modals',
  icon: <IconAppWindow stroke={1.5} />,
  description: 'Modal dialogs for capturing user attention or displaying information.',
  variants: [
    {
      id: 'simple-modal',
      name: 'Simple Modal',
      code: `<div>
  <input type="checkbox" id="modal-toggle" class="peer hidden" />

  <label for="modal-toggle" class="inline-flex items-center justify-center rounded-lg bg-lime-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-lime-700 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900 cursor-pointer">
    Open Modal
  </label>

  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:[&>div]:scale-100 peer-checked:[&>div]:opacity-100 transition-all duration-300">
    <div class="relative w-full max-w-md transform rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-xl transition-all scale-95 opacity-0 duration-300 delay-75">
      <label for="modal-toggle" class="absolute right-4 top-4 cursor-pointer text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>

      <div class="text-center">
        <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 dark:bg-lime-900/30">
          <svg class="h-6 w-6 text-lime-600 dark:text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-100">
          Payment Successful
        </h3>

        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Lorem ipsum dolor sit amet. 19 juta lapangan kerja.
        </p>

        <div class="mt-6 flex justify-center gap-3">
          <label for="modal-toggle" class="cursor-pointer rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 hover:text-lime-700 focus:z-10 focus:ring-4 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:ring-neutral-700">
            Cancel
          </label>
          <label for="modal-toggle" class="cursor-pointer rounded-lg bg-lime-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-lime-700 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900">
            Continue
          </label>
        </div>
      </div>
    </div>

    <label for="modal-toggle" class="absolute inset-0 -z-10 cursor-default"></label>
  </div>
</div>`
    },
    {
      id: 'terms-modal',
      name: 'Large Scrollable Modal',
      code: `<div>
  <input type="checkbox" id="terms-modal-toggle" class="peer hidden" />

  <label for="terms-modal-toggle" class="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 cursor-pointer">
    Terms of Service
  </label>

  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:[&>div]:scale-100 peer-checked:[&>div]:opacity-100 transition-all duration-300 p-4">
    <div class="relative w-full max-w-2xl transform rounded-2xl bg-white dark:bg-neutral-900 shadow-2xl transition-all scale-95 opacity-0 duration-300 flex flex-col max-h-[90vh]">
      <div class="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 p-6">
        <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          Terms of Service
        </h3>
        <label for="terms-modal-toggle" class="cursor-pointer rounded-full p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
          <svg class="h-6 w-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <div class="overflow-y-auto p-6 space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <strong>Program 19 Juta Lapangan Kerja</strong><br /><br />
        Welcome to the “19 Million Job Opportunities” Program. Please read these terms carefully before having hope.<br /><br />

        <strong>1. Acceptance of Terms</strong><br />
        By hearing, reading, or sharing the phrase “19 juta lapangan kerja”, you automatically agree to these Terms.
        If you disagree, you remain unemployed — but with awareness.<br /><br />

        <strong>2. Eligibility</strong><br />
        • Fresh graduate with a minimum of 5 years experience<br />
        • Maximum age: 23 years old (flexible, depending on HR mood)<br />
        • Able to work under pressure, multitasking, and low salary<br />
        • Own a laptop, a motorcycle, a strong mindset, and mental resilience<br /><br />
        Meeting all requirements does not guarantee employment.<br /><br />

        <strong>3. Use License</strong><br />
        Permission is granted to temporarily believe in the availability of jobs for personal motivation only.
        Commercial use, expectations, and long-term planning are strictly discouraged.<br /><br />

        <strong>4. Disclaimer</strong><br />
        All job opportunities are provided on an “as is” basis.
        We make no guarantees regarding job placement, salary, career growth, or mental health.
        Any resemblance to actual vacancies is purely coincidental.<br /><br />

        <strong>5. Limitation of Responsibility</strong><br />
        We are not responsible if positions are suddenly “filled internally”, vacancies disappear after CV submission,
        you are ghosted after interview, or the job exists only in reports.<br /><br />

        <strong>6. Changes to Terms</strong><br />
        These Terms may change at any time without notice, usually after a press conference.<br /><br />

        <strong>7. Governing Law</strong><br />
        These Terms are governed by statistics, PowerPoint presentations, and national optimism.
      </div>

      <div class="border-t border-neutral-200 dark:border-neutral-800 p-6 flex justify-end gap-3">
        <label for="terms-modal-toggle" class="cursor-pointer rounded-lg px-5 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
          Decline
        </label>
        <label for="terms-modal-toggle" class="cursor-pointer rounded-lg bg-lime-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-lime-700 transition-colors">
          I Accept
        </label>
      </div>
    </div>

    <label for="terms-modal-toggle" class="absolute inset-0 -z-10 cursor-default"></label>
  </div>
</div>`
    }
  ]
};
  