'use client';

import Link from "next/link";
import ComponentPreview from "@/app/components/ComponentPreview";
import { usePagination } from "@/lib/hooks/usePagination";
import { Pagination, PaginationInfo } from "@/lib/components/Pagination";
import { ComponentType } from "@/lib/data/components/types";

interface ComponentDetailClientProps {
  component: ComponentType;
}

export function ComponentDetailClient({ component }: ComponentDetailClientProps) {
  const {
    currentItems,
    currentPage,
    totalPages,
    totalItems,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    nextPage,
    previousPage,
  } = usePagination({
    data: component.variants,
    itemsPerPage: component.pagination?.itemsPerPage || 6,
  });

  const showPagination = component.pagination?.enabled && totalPages > 1 && totalItems > 5;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors" prefetch={false}>
          Home
        </Link>
        <span>/</span>
        <Link
          href="/components/application"
          className="hover:text-foreground transition-colors"
          prefetch={false}
        >
          Application
        </Link>
        <span>/</span>
        <span className="text-foreground">{component.name}</span>
      </div>

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

      <div className="space-y-12">
        {currentItems.map((variant, index) => {
          const globalIndex = (currentPage - 1) * (component.pagination?.itemsPerPage || 6) + index;
          return (
            <div key={variant.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {globalIndex + 1}
                </span>
                <h2 className="text-xl font-semibold text-foreground">
                  {variant.name}
                </h2>
              </div>

              <ComponentPreview title={variant.name} code={variant.code}>
                <div dangerouslySetInnerHTML={{ __html: variant.code }} />
              </ComponentPreview>
            </div>
          );
        })}
      </div>

      {showPagination && (
        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            onPageChange={goToPage}
            onNextPage={nextPage}
            onPreviousPage={previousPage}
            showPageNumbers={component.pagination?.showPageNumbers}
          />
          {component.pagination?.showInfo && (
            <PaginationInfo
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsPerPage={component.pagination?.itemsPerPage || 6}
            />
          )}
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/components/application"
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
          Back to Application Components
        </Link>
      </div>
    </div>
  );
}