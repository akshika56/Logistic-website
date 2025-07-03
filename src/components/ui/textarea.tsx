// src/components/ui/textarea.tsx
import React from "react";

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea {...props} className="border rounded px-3 py-2 w-full" />
);
