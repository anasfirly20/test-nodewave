import React from "react";

type TProps = {
  label: string;
  className?: string;
};

export default function CustomHeader({ label, className }: TProps) {
  return (
    <h1 className={`text-white text-center font-medium text-3xl ${className}`}>
      {label}
    </h1>
  );
}
