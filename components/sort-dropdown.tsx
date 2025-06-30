"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface SortDropdownProps {
  sortBy: string
  onSortChange: (sortBy: string) => void
}

const sortOptions = [
  { value: "relevance", label: "Más relevantes" },
  { value: "name-asc", label: "Nombre: A-Z" },
  { value: "name-desc", label: "Nombre: Z-A" },
  { value: "price-asc", label: "Precio: Menor a Mayor" },
  { value: "price-desc", label: "Precio: Mayor a Menor" },
]

export default function SortDropdown({ sortBy, onSortChange }: SortDropdownProps) {
  const currentSort = sortOptions.find((option) => option.value === sortBy)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="bg-white">
          🔄 Ordenar por: {currentSort?.label}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSortChange(option.value)}
            className={sortBy === option.value ? "bg-gray-100" : ""}
          >
            {option.label}
            {sortBy === option.value && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
