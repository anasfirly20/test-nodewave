import React from "react";

type TProps = {
  label: string;
  className?: string;
};

export default function CustomButton({ label, className }: TProps) {
  return (
    <button
      className={`bg-custom-green py-2 px-4 rounded-full hover:opacity-90 active:opacity-80 ${className}`}
    >
      {label}
    </button>
  );
}
