type TProps = {
  label: string;
  className?: string;
  onClick?: any;
};

export default function CustomButton({ label, className, onClick }: TProps) {
  return (
    <button
      className={`bg-custom-green py-2 px-4 rounded-full hover:opacity-90 active:opacity-80 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
