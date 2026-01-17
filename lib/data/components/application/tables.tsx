import { IconTable } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const tables: ComponentType = {
    slug: 'tables',
    name: 'Tables',
    icon: <IconTable stroke={1.5} />,
    description: 'Data grids for displaying large amounts of data in a readable format.',
    variants: [
        {
            id: 'simple-table',
            name: 'Simple Table',
            code: `<div class="w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm text-neutral-600 dark:text-neutral-400">
      <thead class="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 uppercase font-medium text-xs">
        <tr>
          <th scope="col" class="px-6 py-3">Product Name</th>
          <th scope="col" class="px-6 py-3">Color</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Price</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-900">
        <tr class="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
          <td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">Apple MacBook Pro 17"</td>
          <td class="px-6 py-4">Silver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">$2999</td>
        </tr>
        <tr class="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
          <td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">Microsoft Surface Pro</td>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
        </tr>
        <tr class="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
          <td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">Magic Mouse 2</td>
          <td class="px-6 py-4">Black</td>
          <td class="px-6 py-4">Accessories</td>
          <td class="px-6 py-4">$99</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
        },
        {
            id: 'striped-table',
            name: 'Striped Table',
            code: `<div class="w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm text-neutral-600 dark:text-neutral-400">
      <thead class="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 uppercase font-medium text-xs border-b border-neutral-200 dark:border-neutral-800">
        <tr>
          <th scope="col" class="px-6 py-3">Invoice</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Method</th>
          <th scope="col" class="px-6 py-3 text-right">Amount</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-neutral-200 dark:divide-neutral-800">
        <tr class="bg-white dark:bg-neutral-900">
          <td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">INV001</td>
          <td class="px-6 py-4">
            <span class="inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-900/30 dark:text-lime-400">Paid</span>
          </td>
          <td class="px-6 py-4">Credit Card</td>
          <td class="px-6 py-4 text-right">$250.00</td>
        </tr>
        <tr class="bg-neutral-50 dark:bg-neutral-800/40">
          <td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">INV002</td>
          <td class="px-6 py-4">
            <span class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Pending</span>
          </td>
          <td class="px-6 py-4">PayPal</td>
          <td class="px-6 py-4 text-right">$120.50</td>
        </tr>
        <tr class="bg-white dark:bg-neutral-900">
          <td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">INV003</td>
          <td class="px-6 py-4">
            <span class="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-400">Overdue</span>
          </td>
          <td class="px-6 py-4">Bank Transfer</td>
          <td class="px-6 py-4 text-right">$550.00</td>
        </tr>
        <tr class="bg-neutral-50 dark:bg-neutral-800/40">
          <td class="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-100">INV004</td>
          <td class="px-6 py-4">
            <span class="inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-900/30 dark:text-lime-400">Paid</span>
          </td>
          <td class="px-6 py-4">Credit Card</td>
          <td class="px-6 py-4 text-right">$850.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
        },
        {
            id: 'table-with-avatars',
            name: 'User List with Actions',
            code: `<div class="w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
  <!-- Table Header Controls -->
  <div class="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-neutral-200 dark:border-neutral-800">
    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Team Members</h3>
    <div class="flex items-center gap-2">
      <input type="text" placeholder="Search..." class="rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-1.5 text-sm text-neutral-900 dark:text-neutral-100 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500" />
      <button class="items-center justify-center rounded-lg bg-lime-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-lime-700 transition-colors">
        Add Member
      </button>
    </div>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm text-neutral-600 dark:text-neutral-400">
      <thead class="bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 font-medium">
        <tr>
          <th scope="col" class="px-6 py-4">User</th>
          <th scope="col" class="px-6 py-4">Role</th>
          <th scope="col" class="px-6 py-4">Last Active</th>
          <th scope="col" class="px-6 py-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-neutral-200 dark:divide-neutral-800">
        <!-- Row 1 -->
        <tr class="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
          <td class="px-6 py-4">
            <div class="flex items-center gap-3">
              <div class="relative h-10 w-10 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-700">
                <svg class="h-full w-full text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div class="font-medium text-neutral-900 dark:text-neutral-100">Bonnie Green</div>
                <div class="text-xs text-neutral-500 dark:text-neutral-500">bonnie@example.com</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <span class="inline-flex items-center rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
              Admin
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">just now</td>
          <td class="px-6 py-4 text-right">
             <button class="font-medium text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 transition-colors">Edit</button>
          </td>
        </tr>
        <!-- Row 2 -->
        <tr class="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
          <td class="px-6 py-4">
            <div class="flex items-center gap-3">
              <div class="relative h-10 w-10 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-700 bg-lime-100 flex items-center justify-center text-lime-700 font-bold">
                JL
              </div>
              <div>
                <div class="font-medium text-neutral-900 dark:text-neutral-100">Jese Leos</div>
                <div class="text-xs text-neutral-500 dark:text-neutral-500">jese@example.com</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
             <span class="inline-flex items-center rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
              Editor
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">2 mins ago</td>
          <td class="px-6 py-4 text-right">
             <button class="font-medium text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 transition-colors">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <!-- Footer Pagination -->
  <div class="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 px-6 py-3">
    <div class="text-xs text-neutral-500 dark:text-neutral-400">
      Showing <span class="font-semibold text-neutral-900 dark:text-neutral-100">1-5</span> of <span class="font-semibold text-neutral-900 dark:text-neutral-100">20</span>
    </div>
    <div class="flex gap-2">
      <button class="rounded-md border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800">Previous</button>
      <button class="rounded-md border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800">Next</button>
    </div>
  </div>
</div>`,
        }
    ],
};
