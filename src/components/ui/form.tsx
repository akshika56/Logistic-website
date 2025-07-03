'use client'

import * as React from 'react'
import {
  useFormContext,
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form'

import { cn } from '@/lib/utils'

const Form = ({ ...props }: React.FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...props} />
}

type FormFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = ControllerProps<TFieldValues, TName>

function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  ...props
}: FormFieldProps<TFieldValues, TName>) {
  return <Controller {...props} />
}

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-2', className)} {...props} />
))
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
    {...props}
  />
))
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
))
FormControl.displayName = 'FormControl'

const FormMessage = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return children ? (
    <p className={cn('text-sm text-red-500', className)}>{children}</p>
  ) : null
}

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
}
