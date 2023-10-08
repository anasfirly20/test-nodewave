type TProps = {
  label: string;
  className?: string;
};

export default function CustomHeader({ label, className }: TProps) {
  return (
    <h1
      className={`text-white text-center font-medium text-3xl pb-10 ${className}`}
    >
      {label}
    </h1>
  );
}
