import Link from "next/link";
import { notFound } from "next/navigation";
import { getComponentBySlug, getAllComponents } from "@/lib/data/components";
import ComponentPreview from "@/app/components/ComponentPreview";


interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllComponents();
  const params: { category: string; slug: string }[] = [];

  categories.forEach((cat) => {
    cat.components.forEach((comp) => {
      params.push({
        category: cat.slug,
        slug: comp.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { category, slug } = await params;
  const component = getComponentBySlug(category, slug);

  if (!component) {
    return { title: "Component Not Found - Joko UI" };
  }

  const categoryName = category === "application" ? "Application Components" : "Marketing Components";

  return {
    title: `${component.name} - ${categoryName} - Joko UI`,
    description: component.description,
  };
}

export default async function ComponentDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const component = getComponentBySlug(category, slug);

  if (!component) {
    notFound();
  }

  const categoryName = category === "application" ? "Application" : "Marketing";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors" prefetch={false}>
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/components/${category}`}
          className="hover:text-foreground transition-colors capitalize"
          prefetch={false}
        >
          {categoryName}
        </Link>
        <span>/</span>
        <span className="text-foreground">{component.name}</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{component.icon}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            {component.name}
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {component.description}
        </p>
        <div className="mt-4 flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
            {component.variants.length} variants
          </span>
        </div>
      </div>

      {/* Component Variants */}
      <div className="space-y-12">
        {component.variants.map((variant, index) => (
          <div key={variant.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                {index + 1}
              </span>
              <h2 className="text-xl font-semibold text-foreground">
                {variant.name}
              </h2>
            </div>

            {/* Preview */}
            <ComponentPreview title={variant.name} code={variant.code}>
              <div dangerouslySetInnerHTML={{ __html: variant.code }} />
            </ComponentPreview>

            <div className="flex items-center -mt-2">
              <p className="text-sm font-medium text-gray-400 dark:text-gray-500">contributed by&nbsp;
                <a
                  href={`https://github.com/${variant.contributor ?? ""}`}
                  target="_blank"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary hover:underline font-semibold transition-colors"
                >
                  {variant.contributor ?? "unknown"}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href={`/components/${category}`}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          prefetch={false}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to {categoryName} Components
        </Link>
      </div>
    </div>
  );
}
