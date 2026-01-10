'use client';

import React from 'react';
import { usePagination } from '@/lib/hooks/usePagination';
import { Pagination, PaginationInfo } from '@/lib/components/Pagination';
import { ComponentType } from '@/lib/data/components/types';

interface ComponentPageWithPaginationProps {
  component: ComponentType;
  itemsPerPage?: number;
}

export function ComponentPageWithPagination({ 
  component, 
  itemsPerPage = 6 
}: ComponentPageWithPaginationProps) {
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
    itemsPerPage,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          {component.icon}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {component.name}
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {component.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentItems.map((variant) => (
          <div
            key={variant.id}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {variant.name}
            </h3>
            
            <div className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg mb-4">
              <div dangerouslySetInnerHTML={{ __html: variant.code }} />
            </div>

            <button
              onClick={() => navigator.clipboard.writeText(variant.code)}
              className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              Copy Code
            </button>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        onPageChange={goToPage}
        onNextPage={nextPage}
        onPreviousPage={previousPage}
      />

      <PaginationInfo
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}