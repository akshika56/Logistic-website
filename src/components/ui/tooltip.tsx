// app/components/TooltipDemo.tsx (or wherever you keep components)

// src/components/ui/tooltip.tsx

"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils"; // If you don’t have this, I can give it

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPortal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    />
  </TooltipPortal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  TooltipProvider,
  TooltipRoot as Tooltip,
  TooltipTrigger,
  TooltipContent,
};
