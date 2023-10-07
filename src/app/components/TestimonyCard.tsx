type TProps = {
  desc: string;
  author: string;
};

export default function TestimonyCard({ desc, author }: TProps) {
  return (
    <section className="flex flex-col justify-between p-4 bg-white gap-5 rounded-md carousel-item w-[45%]">
      <p className="text-black">{desc}</p>
      <p className="text-[#00AD98]">{author}</p>
    </section>
  );
}
