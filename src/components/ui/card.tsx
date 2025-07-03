import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={clsx("bg-white shadow-md rounded-lg p-4", className)}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={clsx("p-4", className)}>
      {children}
    </div>
  );
};
