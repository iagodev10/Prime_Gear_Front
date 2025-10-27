import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  
  // Lógica para mostrar páginas
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage, '...', totalPages);
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 py-8" id="pagination">
      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 rounded-full"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {pages.map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            className={`w-10 h-10 rounded-full ${
              currentPage === page
                ? "bg-black text-white hover:bg-gray-800"
                : "hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        )
      ))}

      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 rounded-full"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}