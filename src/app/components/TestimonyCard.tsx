type TProps = {
  desc: string;
  author: string;
};

export default function TestimonyCard({ desc, author }: TProps) {
  return (
    <section className="flex flex-col justify-between p-4 bg-white rounded-md w-[35%]">
      <p className="text-black">{desc}</p>
      <p className="text-[#00AD98]">{author}</p>
    </section>
  );
}
