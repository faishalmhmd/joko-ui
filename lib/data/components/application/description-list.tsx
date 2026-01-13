import { IconList } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const description_list: ComponentType = {
  slug: 'description-list',
  name: 'Description List',
  icon: <IconList stroke={1.5} />,
  description: 'A semantic HTML component for displaying key-value pairs, perfect for structured data like product details or definitions.',
  variants: [
    {
      id: 'descirption-list-basic',
      name: 'Basic Description List',
      code: `<section class="bg-background px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <h2 class="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
      Features & Details
    </h2>

    <dl class="grid gap-6 sm:grid-cols-2">
      <div class="flex flex-col">
        <dt class="text-sm font-semibold text-accent mb-1">Fast & Lightweight</dt>
        <dd class="text-sm text-muted-foreground">
          Jokoui is optimized for performance and minimal footprint, so your site loads fast everywhere.
        </dd>
      </div>

      <div class="flex flex-col">
        <dt class="text-sm font-semibold text-accent mb-1">Responsive Design</dt>
        <dd class="text-sm text-muted-foreground">
          Works seamlessly on mobile, tablet, and desktop screens without additional effort.
        </dd>
      </div>

      <div class="flex flex-col">
        <dt class="text-sm font-semibold text-accent mb-1">Accessible Components</dt>
        <dd class="text-sm text-muted-foreground">
          All UI elements follow WAI-ARIA best practices for maximum accessibility.
        </dd>
      </div>

      <div class="flex flex-col">
        <dt class="text-sm font-semibold text-accent mb-1">Easy to Customize</dt>
        <dd class="text-sm text-muted-foreground">
          Fully customizable with Tailwind utility classes or your own theme configuration.
        </dd>
      </div>
    </dl>
  </div>
</section>
`,
      contributor: 'yuxxeun',
    },
    {
      id: 'descirption-list-with-heading',
      name: 'Description List with Heading',
      code: `<section class="bg-background px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <h2 class="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
      Product Details
    </h2>
    <dl class="divide-y divide-border/50">
      <div class="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <dt class="text-sm font-medium text-accent">Name</dt>
        <dd class="mt-1 sm:mt-0 text-sm text-muted-foreground">Jokoui Web UI</dd>
      </div>

      <div class="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <dt class="text-sm font-medium text-accent">Version</dt>
        <dd class="mt-1 sm:mt-0 text-sm text-muted-foreground">v1.0.0</dd>
      </div>

      <div class="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <dt class="text-sm font-medium text-accent">License</dt>
        <dd class="mt-1 sm:mt-0 text-sm text-muted-foreground">MIT</dd>
      </div>

      <div class="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <dt class="text-sm font-medium text-accent">Last Updated</dt>
        <dd class="mt-1 sm:mt-0 text-sm text-muted-foreground">Jan 2026</dd>
      </div>
    </dl>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'descirption-list-with-stepper',
      name: 'Description List with Stepper',
      code: `<section class="bg-background px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <h2 class="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
      How Jokoui Works
    </h2>

    <dl class="relative border-l-2 border-border/50">
      <div class="relative mb-10 pl-6">
        <span class="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs font-bold">
          1
        </span>
        <dt class="text-sm font-semibold text-accent mb-1">Install & Setup</dt>
        <dd class="text-sm text-muted-foreground">
          Add Jokoui to your project and configure Tailwind theme. Start building your UI in minutes.
        </dd>
      </div>

      <div class="relative mb-10 pl-6">
        <span class="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs font-bold">
          2
        </span>
        <dt class="text-sm font-semibold text-accent mb-1">Use Components</dt>
        <dd class="text-sm text-muted-foreground">
          Leverage pre-built Jokoui components like buttons, forms, and cards with responsive defaults.
        </dd>
      </div>

      <div class="relative mb-10 pl-6">
        <span class="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs font-bold">
          3
        </span>
        <dt class="text-sm font-semibold text-accent mb-1">Customize & Extend</dt>
        <dd class="text-sm text-muted-foreground">
          Tweak theme colors, fonts, and layouts to match your brand without losing design consistency.
        </dd>
      </div>

      <div class="relative mb-10 pl-6">
        <span class="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-xs font-bold">
          4
        </span>
        <dt class="text-sm font-semibold text-accent mb-1">Ship & Iterate</dt>
        <dd class="text-sm text-muted-foreground">
          Deploy your app with confidence and iterate quickly using Jokoui’s clean, composable components.
        </dd>
      </div>
    </dl>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    ]
}