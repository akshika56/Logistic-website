import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[100%] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full dark:border-slate-800",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        destructive: "destructive group bg-red-600 text-white dark:bg-red-600 dark:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const ToastContext = React.createContext<{
  variant: "default" | "destructive"
}>({
  variant: "default",
})

const ToastProvider = ToastContext.Provider

function Toast({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { variant } = React.useContext(ToastContext)

  return (
    <div className={cn(toastVariants({ variant }), className)} {...props} />
  )
}

function ToastTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-sm font-semibold", className)} {...props} />
}

function ToastDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm opacity-90", className)} {...props} />
}

function ToastClose({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 group-hover:opacity-100",
        className
      )}
      {...props}
    >
      <X className="h-4 w-4" />
    </button>
  )
}

function ToastViewport({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props}
    />
  )
}

export type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type ToastActionElement = React.ReactElement

export {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
  toastVariants, // ✅ exporting the correct name now
}
