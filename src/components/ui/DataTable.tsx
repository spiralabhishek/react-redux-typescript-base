
import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Loader2
} from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
} from './pagination';

export interface Meta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

interface DataTableProps<T> {
  data: T[];
  columns: Array<{
    header: string;
    accessor: string | ((item: T) => React.ReactNode);
    className?: string;
  }>;
  meta?: Meta;
  isLoading?: boolean;
  onPageChange?: (page: number) => void;
  actions?: (item: T) => React.ReactNode;
}

export function DataTable<T extends { _id: string }>({
  data,
  columns,
  meta,
  isLoading = false,
  onPageChange,
  actions
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(meta?.currentPage || 1);
  
  const handlePageChange = (page: number) => {
    if (page < 1 || page > (meta?.totalPages || 1) || page === currentPage) return;
    
    setCurrentPage(page);
    onPageChange?.(page);
  };
  
  const getValue = (item: T, accessor: string | ((item: T) => React.ReactNode)) => {
    if (typeof accessor === 'function') {
      return accessor(item);
    }
    
    // Handle nested properties like 'user.name'
    return accessor.split('.').reduce((obj, key) => (obj as any)?.[key], item);
  };

  // Render pagination controls
  const renderPagination = () => {
    if (!meta || meta.totalPages <= 1) return null;
    
    return (
      <div className="flex items-center justify-between border-t bg-white px-4 py-3">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{((meta.currentPage - 1) * meta.itemsPerPage) + 1}</span> to{' '}
          <span className="font-medium">
            {Math.min(meta.currentPage * meta.itemsPerPage, meta.totalItems)}
          </span>{' '}
          of <span className="font-medium">{meta.totalItems}</span> results
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationFirst
                onClick={() => handlePageChange(1)}
                className={meta.currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(meta.currentPage - 1)}
                className={meta.currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {Array.from({ length: Math.min(5, meta.totalPages) }, (_, i) => {
              // Show pages around the current page
              let pageNum;
              if (meta.totalPages <= 5) {
                pageNum = i + 1;
              } else if (meta.currentPage <= 3) {
                pageNum = i + 1;
              } else if (meta.currentPage >= meta.totalPages - 2) {
                pageNum = meta.totalPages - 4 + i;
              } else {
                pageNum = meta.currentPage - 2 + i;
              }
              
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink 
                    isActive={pageNum === meta.currentPage}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(meta.currentPage + 1)}
                className={meta.currentPage === meta.totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLast
                onClick={() => handlePageChange(meta.totalPages)}
                className={meta.currentPage === meta.totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden border bg-white shadow-sm">
      <div className="relative overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary text-sm font-medium">
            <tr>
              {columns.map((column, i) => (
                <th 
                  key={i} 
                  className={`whitespace-nowrap px-4 py-3 text-left ${column.className || ''}`}
                >
                  {column.header}
                </th>
              ))}
              {actions && <th className="whitespace-nowrap px-4 py-3 text-right">Actions</th>}
            </tr>
          </thead>
          
          <tbody className="divide-y text-sm">
            {isLoading ? (
              <tr>
                <td 
                  colSpan={columns.length + (actions ? 1 : 0)} 
                  className="px-4 py-6 text-center"
                >
                  <div className="flex items-center justify-center">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Loading...</span>
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td 
                  colSpan={columns.length + (actions ? 1 : 0)} 
                  className="px-4 py-6 text-center text-muted-foreground"
                >
                  No records found
                </td>
              </tr>
            ) : (
              data.map((item, i) => (
                <tr 
                  key={item._id || i} 
                  className="bg-white transition-colors hover:bg-secondary/40"
                >
                  {columns.map((column, j) => (
                    <td 
                      key={j} 
                      className={`whitespace-nowrap px-4 py-3 ${column.className || ''}`}
                    >
                      {getValue(item, column.accessor)}
                    </td>
                  ))}
                  {actions && (
                    <td className="whitespace-nowrap px-4 py-3 text-right">
                      {actions(item)}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {meta && meta.totalPages > 1 && renderPagination()}
    </Card>
  );
}
