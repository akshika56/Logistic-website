"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export type SelectItemType = {
  label: string
  value: string
}

interface SelectProps {
  value?: string
  onValueChange: (value: string) => void
  options: SelectItemType[]
  placeholder?: string
}

const Select = ({
  value,
  onValueChange,
  options,
  placeholder = "Select an option",
}: SelectProps) => {
  const [open, setOpen] = React.useState(false)
  const selectedLabel =
    options.find((option) => option.value === value)?.label || ""

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          role="button"
          className={cn(
            "flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm shadow-sm",
            !value && "text-muted-foreground"
          )}
        >
          <span className={cn(!value && "text-muted-foreground")}>
            {selectedLabel || placeholder}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {options.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={() => {
                  onValueChange(item.value)
                  setOpen(false)
                }}
              >
                {item.label}
                {value === item.value && (
                  <Check className="ml-auto h-4 w-4 text-primary" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Select

// Optional placeholder for form libraries like React Hook Form
export const SelectValue = ({ children }: { children?: React.ReactNode }) => {
  return <span>{children}</span>
}

// Named exports for consistency
export {
  PopoverTrigger as SelectTrigger,
  PopoverContent as SelectContent,
  CommandInput,
  CommandItem as SelectItem,
  CommandGroup,
  Command,
  CommandEmpty,
}
