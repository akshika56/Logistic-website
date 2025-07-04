// src/components/ui/input.tsx
import React from "react";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className="border rounded px-3 py-2 w-full" />
);

